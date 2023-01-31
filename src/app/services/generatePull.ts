import { ADDONS_BOXES } from '../renderData/addonsCards';
import { AEONS_END_BASE, BASE_BOXES } from '../renderData/baseGameCards';
import { addAddons } from './addAddons';

export function generatePull(baseBoxes: BASE_BOXES[], addonsBoxes: ADDONS_BOXES[]) {
  return AEONS_END_BASE.cards.concat(addAddons(addonsBoxes));
}
