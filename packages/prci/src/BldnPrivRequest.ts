/* eslint-disable no-restricted-globals */
/* eslint-disable no-param-reassign */
import { html, css, LitElement, PropertyValueMap, TemplateResult } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { choose } from 'lit/directives/choose.js';
import { map } from 'lit/directives/map.js';
import { localized, msg } from '@lit/localize';

import '@blindnet/core';
import './FrequentRequestsMenu.js';
import './ReviewView.js';
import './ActionMenuView.js';
import './RequestsView.js';
import './StatusView.js';
import './demand-forms/TransparencyForm.js';
import './demand-forms/AccessForm.js';
import './demand-forms/DeleteForm.js';
import './demand-forms/RevokeConsentForm.js';

import { ACTION, DATA_CATEGORY, TARGET } from './models/priv-terms.js';
import { PrivacyRequest } from './models/privacy-request.js';
import { ComponentState } from './utils/states.js';
import { Demand } from './models/demand.js';
import {
  getDefaultActions,
  getDefaultDataCategories,
  getDefaultDemands,
} from './utils/utils.js';
import { PRCI_CONFIG } from './utils/conf.js';
import { sendPrivacyRequest } from './utils/privacy-request-api.js';
import { PRCIStyles } from './styles.js';

/**
 * Top level component encapsulating a single PrivacyRequest. Contains one or
 * more DemandBuilder elements, each for a single demand action type.
 */
@customElement('bldn-priv-request')
@localized()
export class BldnPrivRequest extends LitElement {
  static styles = [
    PRCIStyles,
    css`
      :host {
        display: flex;
        justify-content: center;
        justify-items: center;

        font-family: var(
          --prci-font-family,
          -apple-system,
          BlinkMacSystemFont,
          'Segoe UI',
          Roboto,
          Oxygen,
          Ubuntu,
          Cantarell,
          'Open Sans',
          'Helvetica Neue',
          sans-serif
        );
        color: var(--prci-font-color, #000000);
        font-size: 16;
        text-align: left;
      }

      #prci-ctr {
        padding: 20px;
        max-width: 1350px;
      }

      #heading-ctr {
        padding: 0px 0px 40px 0px;
        max-width: 1170px;
      }

      .req-hdr {
        display: block;
        font-weight: bold;
        font-size: 24px;
        grid-column: 2/3;
        text-align: center;
      }

      button:disabled {
        background-color: #a9d1ff;
      }
    `,
  ];

  // JSON string of actions to display
  @property({ type: String }) actions = '';

  // JSON string of allowed data categories
  @property({ type: String, attribute: 'data-categories' })
  dataCategories: string = '';

  // Array of available actions, given by actions property if a valid list was passed
  @state() _includedActions: ACTION[] = getDefaultActions();

  // Array of available data categories, given by dataCategories property if a valid list was passed
  @state() _includedDataCategories: DATA_CATEGORY[] =
    getDefaultDataCategories();

  @state() _currentRequestId: string = '';

  @state() _currentDemandGroupId: string = '';

  @state() _currentAction: ACTION = ACTION.TRANSPARENCY;

  // Privacy request object, empty until some demands are added
  @state() _privacyRequest: PrivacyRequest = {
    demands: [],
    data_subject: [
      {
        // FIXME: For now we hardcode this, but will come from token once auth added
        id: 'fdfc95a6-8fd8-4581-91f7-b3d236a6a10e',
        schema: 'dsid',
      },
    ],
    email: '',
    target: TARGET.PARTNERS,
  };

  // Map of demand group ids to sets of demands
  @state() _demands: Map<string, Demand[]> = new Map<string, Demand[]>();

  @state() _config = PRCI_CONFIG;

  // UI state indicating which view to show
  @state() _componentState: ComponentState = ComponentState.MENU;

  constructor() {
    super();

    // Initialize demands and current demand group to the same uuid
    const initialGroup = self.crypto.randomUUID();
    this._demands.set(initialGroup, []);
    this._currentDemandGroupId = initialGroup;

    // State change listener
    this.addEventListener('component-state-change', e => {
      const details = (e as CustomEvent).detail;
      this._componentState = details.newState;

      switch (this._componentState) {
        case ComponentState.EDIT:
          this._currentAction = details.newAction;
          if (details.demandGroupId !== undefined) {
            this._currentDemandGroupId = details.demandGroupId;
          }
          break;
        case ComponentState.SUBMITTED:
          break;
        case ComponentState.MENU:
          // For now, going back to the menu means we reset. This will change
          // when supporting multiple demands.
          this._demands.set(this._currentDemandGroupId, []);
          break;
        case ComponentState.STATUS:
          this._currentRequestId = details.requestId;
          break;
        default:
          break;
      }
    });

    // Demand update listener
    this.addEventListener('demand-set-multiple', e => {
      const { demandGroupId, demands } = (e as CustomEvent).detail;
      this._demands.set(demandGroupId, demands);
    });
    this.addEventListener('demand-set', e => {
      const { demandGroupId, demand } = (e as CustomEvent).detail;
      this._demands.set(demandGroupId, [demand]);
    });
    this.addEventListener('demand-delete', e => {
      const { demandGroupId } = (e as CustomEvent).detail;
      this._demands.delete(demandGroupId);
      this.requestUpdate();
    });

    // Request target listener
    this.addEventListener('request-target-change', e => {
      const { id } = (e as CustomEvent).detail;
      this._privacyRequest.target = id as TARGET;
    });

    // Submit request listener
    this.addEventListener('submit-request', () => {
      const allDemands = Array.from(this._demands.values()).reduce(
        (dmds, dmdGroup) => dmds.concat(dmdGroup),
        []
      );
      this._privacyRequest.demands = allDemands.map((d, i) => {
        d.id = i.toString();
        return d;
      });

      sendPrivacyRequest(this._privacyRequest, false).then(response => {
        this.dispatchEvent(
          new CustomEvent('component-state-change', {
            detail: {
              newState: ComponentState.STATUS,
              requestId: response.request_id,
            },
          })
        );
      });
    });
  }

  /**
   * Reset most states
   * // TODO: Remove this and use something like getDefaultDemand() from the forms
   */
  handleRestartClick() {
    this._privacyRequest = {
      demands: [],
      data_subject: [
        {
          // FIXME: For now we hardcode this, but will come from token once auth added
          id: 'fdfc95a6-8fd8-4581-91f7-b3d236a6a10e',
          schema: 'dsid',
        },
      ],
      email: '',
      target: TARGET.PARTNERS,
    };
    this._demands = new Map<string, Demand[]>();
  }

  /**
   * Return a form based on action type with either default or prepopulated demand data
   * @param action PRIV action for which to return a form
   * @returns
   */
  actionFormFactory(action: ACTION) {
    const demandGroup = this._demands.get(this._currentDemandGroupId);

    // Use one of the multi demand forms
    if (action === ACTION.TRANSPARENCY) {
      // Decide if we should use the default demand or not
      const multiDemand =
        demandGroup && demandGroup.length !== 0
          ? demandGroup
          : getDefaultDemands(action);
      return html`
        <transparency-form
          .demands=${multiDemand}
          .demandGroupId=${this._currentDemandGroupId}
          .restrictions=${multiDemand[0].restrictions}
        ></transparency-form>
      `;
    }

    // Use one of the single demand forms
    const demand =
      demandGroup && demandGroup.length !== 0 ? demandGroup[0] : undefined;
    const useDefault = !demandGroup || demandGroup.length === 0;
    // Get the form for all other action types
    return html`
      ${choose(
        action,
        [
          [
            ACTION.ACCESS,
            () => html`
              <access-form
                .demand=${demandGroup ?? ''}
                .demandGroupId=${this._currentDemandGroupId}
                .allowedDataCategories=${this._includedDataCategories}
                .default=${useDefault}
              ></access-form>
            `,
          ],
          [
            ACTION.DELETE,
            () => html`
              <delete-form
                .demand=${demand}
                .demandGroupId=${this._currentDemandGroupId}
                .allowedDataCategories=${this._includedDataCategories}
                .default=${useDefault}
              ></delete-form>
            `,
          ],
          [ACTION.MODIFY, () => html``],
          [ACTION.OBJECT, () => html``],
          [ACTION.PORTABILITY, () => html``],
          [ACTION.RESTRICT, () => html``],
          [
            ACTION.REVOKE,
            () => html`
              <revoke-consent-form
                .demand=${demand}
                .demandGroupId=${this._currentDemandGroupId}
              ></revoke-consent-form>
            `,
          ],
          [ACTION['OTHER.DEMAND'], () => html``],
        ],
        () => html`${msg('Error: Invalid Action')}`
      )}
    `;
  }

  getHeadingString(componentState: ComponentState): TemplateResult<1 | 2> {
    switch (componentState) {
      case ComponentState.REQUESTS:
        return html`${msg('My Submitted Privacy Request(s)')}`;
      case ComponentState.STATUS:
        return html`${msg('My Privacy Request Status')}`;
      default:
        return html`${msg('My Privacy Request')}`;
    }
  }

  // Hook into willUpdate lifecycle method to set the included actions state if a valid list of actions is passed as an attribute
  protected willUpdate(
    _changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>
  ): void {
    if (_changedProperties.has('actions') && this.actions) {
      try {
        // Select the valid actions from those passed in
        const actionsList = (
          Array.from(JSON.parse(this.actions)) as string[]
        ).map(a => a.toLocaleLowerCase());
        const validActionsList = getDefaultActions().filter(a =>
          actionsList.includes(a.toLocaleLowerCase())
        );
        // If any valid actions were passed in, use them
        if (validActionsList.length > 0) {
          this._includedActions = validActionsList;
        }
      } catch {
        this._includedActions = getDefaultActions();
      }
    }

    if (_changedProperties.has('dataCategories') && this.dataCategories) {
      try {
        // Select the valid data categories from those passed in
        const dataCategoriesList = (
          Array.from(JSON.parse(this.dataCategories)) as string[]
        ).map(dc => dc.toLocaleLowerCase());
        const validDataCategories = getDefaultDataCategories().filter(dc =>
          dataCategoriesList.includes(dc.toLocaleLowerCase())
        );
        // If any valid data categories were passed in, use them
        if (validDataCategories.length > 0) {
          this._includedDataCategories = validDataCategories;
        }
      } catch {
        this._includedDataCategories = getDefaultDataCategories();
      }
    }
  }

  render() {
    return html`
      <div id="prci-ctr">
        <div id="heading-ctr">
          <span class="req-hdr"
            >${this.getHeadingString(this._componentState)}</span
          >
        </div>
        ${choose(this._componentState, [
          [
            ComponentState.MENU,
            () => html`
              <div>
                <action-menu-view
                  .includedActions=${this._includedActions}
                ></action-menu-view>
              </div>
            `,
          ],
          [
            ComponentState.EDIT,
            () => html`
              <div class="border--medium border--rounded view-ctr">
                ${this.actionFormFactory(this._currentAction)}
              </div>
            `,
          ],
          [
            ComponentState.REVIEW,
            () => html`
              <div class="border--medium border--rounded view-ctr">
                ${map(
                  this._demands.entries(),
                  ([groupId, demands]) => html`<review-view
                    .demandGroupId=${groupId}
                    .demands=${demands}
                  ></review-view>`
                )}
              </div>
            `,
          ],
          [
            ComponentState.REQUESTS,
            () => html` <requests-view></requests-view> `,
          ],
          [
            ComponentState.STATUS,
            () =>
              html` <status-view
                request-id=${this._currentRequestId}
              ></status-view>`,
          ],
          [
            ComponentState.SUBMITTED,
            () => html`
              <p>
                <b>${msg('Your Privacy Request has been sent!')} 🎉</b>
              </p>
              <p>${msg('You may track the status of your request below.')}</p>
            `,
          ],
          [ComponentState.AUTH, () => html` <auth-view></auth-view> `],
        ])}
      </div>
    `;
  }
}
