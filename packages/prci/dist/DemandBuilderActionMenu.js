import { __decorate } from './node_modules/tslib/tslib.es6.js';
import { css, LitElement, html } from 'lit';
import { property, customElement } from 'lit/decorators.js';
import { localized } from '@lit/localize';
import { ACTION_TITLES, ACTION_DESCRIPTIONS } from './utils/dictionary.js';
import './ActionItem.js';
import { enabledActions } from './utils/conf.js';

/**
 * Menu of clickable action types
 */
let DemandBuilerActionMenu = class DemandBuilerActionMenu extends LitElement {
    constructor() {
        super(...arguments);
        // Text displayed above menu
        this.prompt = 'Type of demand I want to submit:';
        // Actions to be displayed in the menu, each corresponding to an ActionItem.
        this.includedActions = [];
    }
    render() {
        return html `
      <div class="prompt-heading">${this.prompt}</div>
      <div class="actions-container">
        ${this.includedActions.map(a => html `<action-item
              action-name=${ACTION_TITLES[a]()}
              action-description=${ACTION_DESCRIPTIONS[a]()}
              ?disabled=${!enabledActions.get(a)}
            ></action-item>`)}
      </div>
    `;
    }
};
DemandBuilerActionMenu.styles = css `
    :host {
      grid-column: 1/5;
    }

    .actions-container {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 50px;
      padding: 30px 40px 10px 40px;
    }

    .prompt-heading {
      font-size: 18px;
      text-align: left;
      padding: 0px 0px 0px 10px;
    }
  `;
__decorate([
    property({ type: String })
], DemandBuilerActionMenu.prototype, "prompt", void 0);
__decorate([
    property({ attribute: false })
], DemandBuilerActionMenu.prototype, "includedActions", void 0);
DemandBuilerActionMenu = __decorate([
    localized(),
    customElement('demand-builder-action-menu')
], DemandBuilerActionMenu);

export { DemandBuilerActionMenu };
//# sourceMappingURL=DemandBuilderActionMenu.js.map
