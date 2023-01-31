import { PayloadAction } from '@reduxjs/toolkit';

import { all, call, put, select } from 'redux-saga/effects';
import { CardsState } from './cardsSlice';
import { generateMarket } from '../../services/generateMarket';
import { setCardMarket } from './cardsActions';

export function* marketSet() {
  try {
    const cards: CardsState = yield select((state) => state.cards);

    const market = generateMarket(cards.cardPull, cards.cardSetup);
    yield put(setCardMarket(market));
  } catch (e) {}
}
