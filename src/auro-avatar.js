// Copyright (c) 2020 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

// If use litElement base class
import { LitElement, html, css } from "lit-element";
import '@alaskaairux/auro-icon/dist/auro-icon';

// If using auroElement base class
// See instructions for importing auroElement base class https://git.io/JULq4
// import { html, css } from "lit-element";
// import AuroElement from '@alaskaairux/orion-web-core-style-sheets/dist/auroElement/auroElement';

// Import touch detection lib
import "focus-visible/dist/focus-visible.min.js";
import styleCss from "./style-css.js";

// See https://git.io/JJ6SJ for "How to document your components using JSDoc"
/**
 * Custom element for the purpose of displaying an avatar image.
 *
 * @attr {Boolean} ariaVisible - true value reveals content to screen reader
 * @attr {String} alt - provide string for element alt text
 * @attr {String} code - provide airport code for requested airport image
 * @attr {String} img - provide location or URL for image to be used
 * @attr {String} tail - provide tail logo for requested airline
 * @attr {String} type - modifiers for size of avatar (sm | md)
 */

// build the component class
class AuroAvatar extends LitElement {
  constructor() {
    super();

    this.alt = ``;
    this.ariaVisible = null;
  }

  // function to define props used within the scope of this component
  static get properties() {
    return {
      // ...super.properties,
      ariaVisible: {
        type: Boolean
      },
      code: {
        type: String,
        reflect: true
      },
      img: {
        type: String,
        reflect: true
      },
      alt: {
        type: String,
        reflect: true
      },
      tail: {
        type: String,
        reflect: true
      },
      type: {
        type: String
      }
    };
  }

  static get styles() {
    return css`
      ${styleCss}
    `;
  }

  /**
   * @private
   * @returns {string} - Returns true or false.
   */
  aria() {
    return this.ariaVisible ? 'false' : 'true';
  }

  /**
   * @private
   * @param {string} type - Determines size of image asset to show.
   * @returns {string} - Returns true or false.
   */
  imageSize(type) {
    let output = '';

    switch (type) {
      case `sm`:
        output = '180x180';
        break;
      case 'md':
        output = '360x360';
        break;
      default:
        output = '800x800';
        break;
    }

    return output;
  }

  /**
   * @private
   * @param {string} url - The URL to get status for.
   * @returns {number} - Returns an http status code.
   */
  urlStatus(url) {
    try {
      const http = new XMLHttpRequest();
      http.open('HEAD', url, false);
      http.send();
      return http.status;
    } catch (err) {
      // if the http.send() fails for any reason return `404` code
      const errorCode = 404;
      return errorCode;
    }
  }

  /**
   * @private
   * @param {string} imageType - Passed in value to determine image output.
   * @returns {string} - Returns pre-defined string or free text.
   */
  imageSrc(imageType) {
    let url = `https://resource.alaskaair.net/-/media/Images/common-assets/destinations/${this.imageSize(this.type)}/partner`;

    if (imageType) {
      // when airport `code` attribute is declared
      url = `https://resource.alaskaair.net/-/media/Images/common-assets/destinations/${this.imageSize(this.type)}/${this.code}`;

      const errorCodes = [404]; // eslint-disable-line no-magic-numbers

      if (errorCodes.includes(this.urlStatus(url))) {
        url = `https://resource.alaskaair.net/-/media/Images/common-assets/destinations/${this.imageSize(this.type)}/partner`;
      }
    } else if (!imageType && this.img) {
      // when no airport `code` but we have an `img` attribute declared
      url = this.img;
    }

    return url;
  }

  /**
   * @private
   * @returns {string} - Returns pre-defined DOM string.
   */
  template() {
    if (this.tail) {
      return html`
        <div>
          <auro-icon customSize category="logos" name="tail-${this.tail}"></auro-icon>
        </div>
        <slot name="display" class="tailTitle"></slot>
      `;
    }

    return html`<img alt=${this.alt} src=${this.imageSrc(this.code)} aria-hidden="${this.aria()}">`;
  }

  // When using auroElement, use the following attribute and function when hiding content from screen readers.
  // aria-hidden="${this.hideAudible(this.hiddenAudible)}"

  // function that renders the HTML and CSS into  the scope of the component
  render() {
    return this.template();
  }
}

/* istanbul ignore else */
// define the name of the custom component
if (!customElements.get("auro-avatar")) {
  customElements.define("auro-avatar", AuroAvatar);
}
