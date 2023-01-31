import { AEONS_END_PROMO1 } from '../renderData/addonsCards';

export enum formDictionary {
  ADDONS = 'addons',
  PRESETS = 'presets',
}
export const ruForm: Record<string, string> = {
  [formDictionary.ADDONS]: 'Используемые дополнения:',
  [formDictionary.PRESETS]: 'Используемый пресет рынка',
  [AEONS_END_PROMO1.name]: 'Набор промокард первого предзаказа',
};
