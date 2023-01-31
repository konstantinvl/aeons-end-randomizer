import { BoxInterface, CARD_TYPE } from '../interfaces';

export enum ADDONS_BOXES {
  PROMO1 = 'AEONS_END_PROMO1',
}
export const AEONS_END_PROMO1: BoxInterface = {
  name: ADDONS_BOXES.PROMO1,
  cards: [
    {
      id: 28,
      name: 'Камень эхо',
      value: 4,
      type: CARD_TYPE.GEM,
      collection: 'aeons_promo1',
    },
    {
      id: 29,
      name: 'Веер осколков',
      value: 5,
      type: CARD_TYPE.SPELL,
      collection: 'aeons_promo1',
    },
    {
      id: 30,
      name: 'Море огня',
      value: 6,
      type: CARD_TYPE.SPELL,
      collection: 'aeons_promo1',
    },
    {
      id: 31,
      name: 'Мимолётное видение',
      value: 3,
      type: CARD_TYPE.SPELL,
      collection: 'aeons_promo1',
    },
  ],
};
