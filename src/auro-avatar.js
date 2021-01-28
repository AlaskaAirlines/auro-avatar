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
 * auro-avatar provides users a way to ...
 *
 * @attr {Boolean} ariaVisible - true value reveals content to screen reader
 * @attr {String} alt - provide string for element alt text
 * @attr {String} code - provide airport code for requested airport image
 * @attr {String} img - provide location or URL for image to be used
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
   * @private Function for the purpose of determining aria-hidden value based on attribute setting
   * @returns {string} - Returns true or false
   */
  aria() {
    return this.ariaVisible ? 'false' : 'true';
  }

  /**
   * @private Function for the purpose of determining image src string
   * @param {string} imageType - passed in value to determine image output
   * @returns {string} - Returns pre-defined string or free text
   */
  imageSrc(imageType) {
    if (imageType) {
      return `https://resource.alaskaair.net/-/media/Images/common-assets/destinations/360x360/${this.code}`
    } else if (!imageType && this.img) {
      return this.img
    }

    return `https://resource.alaskaair.net/-/media/Images/common-assets/destinations/360x360/sea`
  }

  /**
   * @private Function for the purpose of determining html template
   * @param {string} templateType - passed in value to determine template output
   * @returns {string} - Returns pre-defined DOM string
   */
  template() {
    if (this.tail) {
      return html`
        <div>
          <auro-icon customSize category="logos" name="tail-${this.tail}"></auro-icon>
        </div>
        <p><slot name="display"></slot></p>
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
