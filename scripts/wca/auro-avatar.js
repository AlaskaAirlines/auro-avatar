
import { AuroAvatar } from '../../src/auro-avatar.js';

/**
 * Custom element for the purpose of displaying an avatar image.
 */
class AuroAvatarWCA extends AuroAvatar {}

if (!customElements.get("auro-avatar")) {
  customElements.define("auro-avatar", AuroAvatarWCA);
}
