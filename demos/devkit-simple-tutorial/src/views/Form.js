import { LitElement, html, css } from 'lit';
import 'carbon-web-components/es/components/form/index.js';
import 'carbon-web-components/es/components/input/index.js';
import 'carbon-web-components/es/components/checkbox/index.js';
import 'carbon-web-components/es/components/tag/index.js';
import 'carbon-web-components/es/components/button/button.js';
import 'carbon-web-components/es/components/file-uploader/index.js';
import 'carbon-web-components/es/components/notification/inline-notification.js';
import { FILE_UPLOADER_ITEM_STATE } from 'carbon-web-components/es/components/file-uploader/file-uploader-item.js';
import { when } from 'lit/directives/when.js';

export class AppParticipateForm extends LitElement {
  static get properties() {
    return {
      pristine: { type: Boolean, state: true },
      consentGiven: { type: Boolean, state: true },
      requireConsent: { type: Boolean, state: true },
      _files: { type: Array, state: true },
    };
  }

  // TODO: way too much getters, use states instead

  /** @type {HTMLFormElement} */
  get _form() {
    // @ts-ignore
    return this.renderRoot?.querySelector('#form-participate') ?? null;
  }

  /** @type {HTMLButtonElement} */
  get _btnSubmit() {
    // @ts-ignore
    return this.renderRoot?.querySelector('#btn-submit') ?? null;
  }

  /** @type {HTMLButtonElement} */
  get _btnReset() {
    // @ts-ignore
    return this.renderRoot?.querySelector('#btn-reset') ?? null;
  }

  /** @type {any} */
  get _inputFirstName() {
    return this.renderRoot?.querySelector('#input-firstname') ?? null;
  }

  /** @type {any} */
  get _inputLastName() {
    return this.renderRoot?.querySelector('#input-lastname') ?? null;
  }

  /** @type {any} */
  get _inputEmail() {
    return this.renderRoot?.querySelector('#input-email') ?? null;
  }

  /** @type {any} */
  get _inputFileUpload() {
    return this.renderRoot?.querySelector('#input-file-upload') ?? null;
  }

  get _checkboxConsent() {
    return this.renderRoot?.querySelector('#consent-checkbox');
  }

  /** @type {any} */
  get _notificationError() {
    return this.renderRoot?.querySelector('#notification-error') ?? null;
  }

  /** @type {any} */
  get _notificationSuccess() {
    return this.renderRoot?.querySelector('#notification-success') ?? null;
  }

  constructor() {
    super();
    this.pristine = true;
    this.consentGiven = false;
    this.requireConsent = false;
    /**
     * @type {any[]}
     */
    this._files = [];
  }

  firstUpdated() {
    this._notificationError.open = false;
    this._notificationSuccess.open = false;
  }

  static get styles() {
    return css`
      form {
        width: 640px;
        padding: 2rem;
      }

      bx-btn + bx-btn {
        margin: 0 1rem;
      }

      bx-form-item,
      bx-inline-notification {
        margin-bottom: 2rem;
        align-items: center;
      }

      .btn-container {
        display: flex;
        align-items: center;
      }
    `;
  }

  /**
   * @param {FormData} formData
   */
  async saveDataToServer(formData) {
    if (this._files.length === 0) return;
    formData.set('proof', this._files[0].file);

    await fetch(
      'https://blindnet-connector-demo-staging.azurewebsites.net/form',
      {
        method: 'POST',
        body: formData,
      }
    );

    this._notificationSuccess.open = true;
  }

  async giveConsent() {
    const headers = {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    };
    await fetch(
      'https://devkit-pce-staging.azurewebsites.net/v0/user-events/consent',
      {
        method: 'POST',
        headers,
        body: JSON.stringify({
          dataSubject: {
            id: 'fdfc95a6-8fd8-4581-91f7-b3d236a6a10e',
            schema: 'dsid',
          },
          consentId: '28b5bee0-9db8-40ec-840e-64eafbfb9ddd',
          date: new Date().toISOString(),
        }),
      }
    );
  }

  /**
   * @param {boolean} value
   */
  setPristine(value) {
    this.pristine = value;
    // @ts-ignore
    this._btnReset.disabled = Boolean(this.pristine);
  }

  /**
   * @param {boolean} value
   */
  setSubmitting(value) {
    if (
      !this._inputFirstName ||
      !this._inputLastName ||
      !this._inputEmail ||
      !this._inputFileUpload
    ) {
      throw new Error('web component incorrectly initialized');
    }
    this._inputFirstName.disabled = value;
    this._inputLastName.disabled = value;
    this._inputEmail.disabled = value;
    this._inputFileUpload.disabled = value;
    this._btnSubmit.disabled = value;
    // @ts-ignore
    this._btnReset.disabled = value || this.pristine;
  }

  /**
   *
   * @param {*} errors
   */
  setValidity(errors = {}) {
    this._notificationError.open = 'email' in errors || 'password' in errors;
    this._inputFirstName.invalid = 'firstname' in errors;
    this._inputLastName.validityMessage = errors.username;
    this._inputEmail.invalid = 'email' in errors;
  }

  async submit() {
    if (!this._form) {
      throw new Error('web component incorrectly initialized');
    }
    const formData = new FormData(this._form);

    try {
      if (this.consentGiven) {
        this.requireConsent = false;
        await this.saveDataToServer(formData);
        await this.giveConsent();
        this.setSubmitting(true);
        this.setValidity();
      } else {
        this._notificationError.open = true;
        this.requireConsent = true;
      }
    } catch ({ errors }) {
      this.setValidity(errors);
    } finally {
      this.setSubmitting(false);
    }
  }

  reset() {
    [this._notificationError.open, this._notificationSuccess.open].forEach(
      el => {
        // eslint-disable-next-line no-param-reassign
        el.open = false;
      }
    );

    [this._inputFirstName, this._inputLastName, this._inputEmail].forEach(
      input => {
        /* eslint-disable no-param-reassign */
        input.invalid = false;
        input.value = '';
        /* eslint-enable no-param-reassign */
      }
    );
    this.setPristine(true);
  }

  /**
   * @param {CustomEvent} e
   */
  handleUpload(e) {
    const { addedFiles } = e.detail;
    const newFiles = addedFiles.map((/** @type {any} */ item) => ({
      id: Math.random().toString(36).slice(2),
      file: item,
    }));
    this._files = newFiles;
  }

  render() {
    return html`
      <h1>Take part in our prize draw!</h1>

      <form id="form-participate">
        <bx-inline-notification
          id="notification-error"
          kind="error"
          hide-close-button
          title="Submition failed"
          subtitle="Please correct below errors."
        ></bx-inline-notification>

        <bx-inline-notification
          id="notification-success"
          kind="success"
          title="Participation recorded!"
        ></bx-inline-notification>

        <bx-form-item>
          <bx-input
            id="input-firstname"
            name="first"
            @input=${() => {
              this.setPristine(false);
            }}
          >
            <span slot="label-text">First Name</span>
            <span slot="validity-message">Something isn't right</span>
          </bx-input>
          <bx-input
            id="input-lastname"
            name="last"
            @input=${() => {
              this.setPristine(false);
            }}
          >
            <span slot="label-text">Last Name</span>
            <span slot="validity-message">Something isn't right</span>
          </bx-input>
        </bx-form-item>
        <bx-form-item>
          <bx-input
            type="email"
            id="input-email"
            name="email"
            @input=${() => {
              this.setPristine(false);
            }}
          >
            <span slot="label-text">Email</span>
            <span slot="validity-message">Something isn't right</span>
          </bx-input>
        </bx-form-item>
        <bx-form-item>
          <bx-file-uploader
            helper-text="Only .jpg, .png or .pdf files."
            label-text="Proof of purchase"
            id="input-file-upload"
            @input=${() => {
              this.setPristine(false);
            }}
          >
            <bx-file-drop-container
              name="proof"
              @bx-file-drop-container-changed=${this.handleUpload}
            >
              Drag and drop a file here or click to upload
            </bx-file-drop-container>
            ${this._files.map(
              ({ id, file }) => html`
                <bx-file-uploader-item
                  data-file-id="${id}"
                  state=${FILE_UPLOADER_ITEM_STATE.UPLOADED}
                >
                  ${file.name}
                  <span slot="validity-message-supplement"></span>
                </bx-file-uploader-item>
              `
            )}
          </bx-file-uploader>
        </bx-form-item>
        <bx-form-item>
          <bx-checkbox
            id="consent-checkbox"
            @bx-checkbox-changed=${() => {
              this.consentGiven = !this.consentGiven;
            }}
            label-text="I consent to the storage and processing of my data for the purposes of this draw"
          ></bx-checkbox>
          ${when(
            this.requireConsent,
            () => html`
              <bx-tag type="red">Consent is required to submit the form</bx-tag>
            `
          )}
        </bx-form-item>
        <div className="btn-container">
          <bx-btn id="btn-submit" @click=${this.submit}>Submit</bx-btn>
          <bx-btn id="btn-reset" kind="secondary" @click=${this.reset}
            >Clear Values</bx-btn
          >
        </div>
      </form>
    `;
  }
}

customElements.define('app-form', AppParticipateForm);
