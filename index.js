import { AuroAvatar } from './src/auro-avatar.js';
import * as RuntimeUtils from '@aurodesignsystem/auro-library/scripts/utils/runtimeUtils.mjs';

RuntimeUtils.default.prototype.registerComponent('custom-avatar', AuroAvatar);
