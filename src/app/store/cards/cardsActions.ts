import { Action, PayloadAction } from '@reduxjs/toolkit';
import { CardInterface, SetupCardInterface } from '../../interfaces';

export const SET_CARD_PULL = 'cards/setCardPull';
export const SET_CARD_MARKET = 'cards/setCardMarket';
export const GENERATE_CARD_MARKET = 'cards/generateCardMarket';
export const SET_CARD_SETUP = 'cards/setCardMarketSetup';
export const REQUEST_CHANGE_NOTE = 'cards/requestNoteChange';
export const REQUEST_DELETE_NOTE = 'cards/requestNoteDelete';

export function setCardPull(pull: CardInterface[]): PayloadAction<CardInterface[]> {
  return { type: SET_CARD_PULL, payload: pull };
}

export function generateCardMarket(): Action {
  return { type: GENERATE_CARD_MARKET };
}

export function setCardMarket(cardMarket: CardInterface[]): PayloadAction<CardInterface[]> {
  return { type: SET_CARD_MARKET, payload: cardMarket };
}

export function setCardSetup(cardSetup: SetupCardInterface[]): PayloadAction<SetupCardInterface[]> {
  return { type: SET_CARD_SETUP, payload: cardSetup };
}
