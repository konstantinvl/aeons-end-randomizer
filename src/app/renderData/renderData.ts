import { BoxInterface, CARD_TYPE } from '../interfaces';
import { AEONS_END_PROMO1 } from './addonsCards';
import { AEONS_END_BASE } from './baseGameCards';

export const BASE_CARDS: BoxInterface[] = [AEONS_END_BASE];

export const ADDONS: BoxInterface[] = [AEONS_END_PROMO1];

export const CARDS_BACKGROUND: Record<string, string> = {
  [CARD_TYPE.GEM]: '#cbbbd5',
  [CARD_TYPE.RELIC]: '#a6c6e6',
  [CARD_TYPE.SPELL]: '#e9d47b',
  [CARD_TYPE.ANY]: '#FFF',
};
