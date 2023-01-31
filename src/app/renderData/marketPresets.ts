import { CARD_TYPE, PresetInterface } from '../interfaces';

export enum PRESET_NAMES {
  RANDOM = 'random',
  STANDART = 'standart',
}

export const MARKET_SETUPS: PresetInterface[] = [
  {
    name: PRESET_NAMES.RANDOM,
    cards: [
      { type: CARD_TYPE.ANY },
      { type: CARD_TYPE.ANY },
      { type: CARD_TYPE.ANY },
      { type: CARD_TYPE.ANY },
      { type: CARD_TYPE.ANY },
      { type: CARD_TYPE.ANY },
      { type: CARD_TYPE.ANY },
      { type: CARD_TYPE.ANY },
      { type: CARD_TYPE.ANY },
    ],
  },
  {
    name: PRESET_NAMES.STANDART,
    cards: [
      { type: CARD_TYPE.GEM },
      { type: CARD_TYPE.GEM },
      { type: CARD_TYPE.GEM },
      { type: CARD_TYPE.RELIC },
      { type: CARD_TYPE.RELIC },
      { type: CARD_TYPE.SPELL },
      { type: CARD_TYPE.SPELL },
      { type: CARD_TYPE.SPELL },
      { type: CARD_TYPE.SPELL },
    ],
  },
];
