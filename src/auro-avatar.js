// Copyright (c) 2025 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

import { AuroIcon } from "@aurodesignsystem/auro-icon/class";
import { AuroDependencyVersioning } from "@aurodesignsystem/auro-library/scripts/runtime/dependencyTagVersioning.mjs";

import AuroLibraryRuntimeUtils from "@aurodesignsystem/auro-library/scripts/utils/runtimeUtils.mjs";
// If use litElement base class
import { LitElement } from "lit";
import { html } from "lit/static-html.js";
import iconVersion from "./iconVersion.js";

import styleCss from "./styles/style.scss";
import tokensCss from "./styles/tokens.scss";

// See https://git.io/JJ6SJ for "How to document your components using JSDoc"
/**
 * Displays a round image that represents a city, an airport, or a user profile.
 *
 * **Key capabilities**
 * - **Airport images**: Set `code` to an airport code to show that airport's image, or a default partner image when it has none.
 * - **Custom images**: Set `img` to the URL of your own image.
 * - **Sizes**: Set `type` to `sm` or `md` for a smaller avatar; it's large by default.
 * - **Accessibility**: Set `ariaVisible` and `alt` to make the image visible to screen readers, which skip it by default.
 *
 * @example
 * <auro-avatar code="sea"></auro-avatar>
 * @summary A round avatar image for airports, cities, or custom images, in three sizes.
 * @customElement auro-avatar
 *
 * @slot display - Deprecated: Use the [auro-tail](https://github.com/AlaskaAirlines/auro-tail) component instead. Text displayed below the tail logo. Only rendered when the `tail` attribute is set.
 */
export class AuroAvatar extends LitElement {
  constructor() {
    super();

    this._initializeDefaults();
  }

  _initializeDefaults() {
    this.alt = "";
    this.ariaVisible = null;

    const versioning = new AuroDependencyVersioning();

    /**
     * @private
     */
    this.iconTag = versioning.generateTag("auro-icon", iconVersion, AuroIcon);

    /**
     * @private
     */
    this.runtimeUtils = new AuroLibraryRuntimeUtils();
  }

  // function to define props used within the scope of this component
  static get properties() {
    return {
      // ...super.properties,

      /**
       * Sets the text that screen readers announce for the image, such as "Sunrise over Seattle" (the image's `alt`). Screen readers use it only when `ariaVisible` is set.
       * @default ""
       */
      alt: {
        type: String,
        reflect: true,
      },

      /**
       * Makes the image visible to screen readers, which skip it by default. Set `alt` as well, so screen readers have text to announce.
       */
      ariaVisible: {
        type: Boolean,
        attribute: "ariavisible",
      },

      /**
       * Sets the airport whose image the avatar shows, using its airport code, such as `sea`. When the airport has no image, the avatar shows a default partner image. Takes priority over `img`.
       */
      code: {
        type: String,
        reflect: true,
      },

      /**
       * Sets the URL of the image to show, such as `https://example.com/photo.jpg` (the image's `src`). When `code` is set, the avatar ignores `img`.
       */
      img: {
        type: String,
        reflect: true,
      },

      /**
       * Deprecated: Use the [auro-tail](https://github.com/AlaskaAirlines/auro-tail) component instead.
       * Sets the airline code, such as `JL`, of the tail logo to show. The `display` slot text appears below the logo.
       * @deprecated Use the [auro-tail](https://github.com/AlaskaAirlines/auro-tail) component instead.
       */
      tail: {
        type: String,
        reflect: true,
      },

      /**
       * Sets the size of the avatar. Use `sm` for the smallest, `md` for medium, or leave it unset for the largest. A smaller size also loads a smaller airport image when you use `code`.
       * @type {'sm' | 'md'}
       */
      type: {
        type: String,
        reflect: true,
      },
    };
  }

  static get styles() {
    return [styleCss, tokensCss];
  }

  /**
   * Registers the element with the browser under a tag name.
   * @param {string} [name="auro-avatar"] - The tag name to register the element under.
   *
   * @example
   * AuroAvatar.register("custom-avatar") // Registers the element as <custom-avatar>.
   *
   */
  static register(name = "auro-avatar") {
    AuroLibraryRuntimeUtils.prototype.registerComponent(name, AuroAvatar);
  }

  firstUpdated() {
    // Add the tag name as an attribute if it is different than the component name
    this.runtimeUtils.handleComponentTagRename(this, "auro-avatar");
  }

  /**
   * @private
   * @returns {string} - The value for the image's `aria-hidden` attribute: "false" when `ariaVisible` is set, otherwise "true".
   */
  aria() {
    return this.ariaVisible ? "false" : "true";
  }

  /**
   * @private
   * @param {string} type - The avatar size, `sm` or `md`. Any other value gives the largest size.
   * @returns {string} - The image size to request, such as "180x180".
   */
  imageSize(type) {
    let output = "";

    switch (type) {
      case "sm":
        output = "180x180";
        break;
      case "md":
        output = "360x360";
        break;
      default:
        output = "800x800";
        break;
    }

    return output;
  }

  /**
   * @private
   * @param {string} url - The URL to get status for.
   * @returns {number} - The HTTP status code of the response, or 404 when the request fails.
   */
  urlStatus(url) {
    try {
      const http = new XMLHttpRequest();
      http.open("HEAD", url, false);
      http.send();
      return http.status;
    } catch (_err) {
      // eslint-disable-line
      // if the http.send() fails for any reason return `404` code
      const errorCode = 404;
      return errorCode;
    }
  }

  /**
   * @private
   * @param {string} imageType - The airport code, if one is set.
   * @returns {string} - The URL of the image to show: the airport image, the `img` URL, or the default partner image.
   */
  imageSrc(imageType) {
    let url = `https://resource.alaskaair.net/-/media/Images/common-assets/destinations/${this.imageSize(this.type)}/partner`;

    if (imageType) {
      // when airport `code` attribute is declared
      url = `https://resource.alaskaair.net/-/media/Images/common-assets/destinations/${this.imageSize(this.type)}/${this.code}`;

      /* eslint-disable no-magic-numbers */
      const errorCodes = [403, 404];
      /* eslint-enable no-magic-numbers */

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
   * @returns {import("lit").TemplateResult} - The template to render: the tail logo and `display` slot when `tail` is set, otherwise the image.
   */
  template() {
    if (this.tail) {
      return html`
        <div>
          <${this.iconTag} category="logos" name="tail-${this.tail}"></${this.iconTag}>
        </div>
        <slot name="display" class="tailTitle body-default"></slot>
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
