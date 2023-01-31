import { FixedSizeArray } from 'fixed-size-array';
import { PRESET_NAMES } from './renderData/marketPresets';

export interface NoteInt {
  id: number;
  note: string;
}

export enum CARD_TYPE {
  GEM = 'gem',
  SPELL = 'spell',
  RELIC = 'relic',
  ANY = 'any',
}

export enum COMPARE_TYPE {
  EQUAL = 'equal',
  MORE_THAN = 'more_than',
  LESS_THAN = 'less_than',
}

export interface CardInterface {
  id: number;
  name: string;
  value: number;
  collection: string;
  type: CARD_TYPE;
}

export interface SetupCardInterface {
  type: CARD_TYPE;
  parameters?: {
    compare: COMPARE_TYPE;
    compareValue: number;
  };
}

export interface BoxInterface {
  name: string;
  cards: CardInterface[];
}

export interface PresetInterface {
  name: PRESET_NAMES;
  cards: SetupCardInterface[];
}
