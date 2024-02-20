import { AuroAvatar } from './src/auro-avatar.js';

/**
 * Register Custom Element.
 * @param {Object} name - Name to use for custom element.
 * @returns {void}
 */
 const registerComponent = (name = 'custom-avatar') => {
  // alias definition
  if (!customElements.get(name)) {
    customElements.define(name, class extends AuroAvatar {});
  }
}

export { registerComponent }
