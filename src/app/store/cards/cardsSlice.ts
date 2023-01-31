import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CardInterface, NoteInt, PresetInterface, SetupCardInterface } from '../../interfaces';
import { AEONS_END_BASE } from '../../renderData/baseGameCards';
import { MARKET_SETUPS, PRESET_NAMES } from '../../renderData/marketPresets';
import { RootState } from '../store';

export interface CardsState {
  cardPull: CardInterface[];
  cardMarket: CardInterface[];
  cardSetup: SetupCardInterface[];
}

const initialState: CardsState = {
  cardPull: AEONS_END_BASE.cards,
  cardMarket: [],
  cardSetup: (
    MARKET_SETUPS.find((preset) => preset.name === PRESET_NAMES.STANDART) as PresetInterface
  ).cards,
};

export const notesSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    setCardPull: (state, action: PayloadAction<CardInterface[]>) => {
      return { ...state, cardPull: action.payload };
    },
    setCardMarket: (state, action: PayloadAction<CardInterface[]>) => {
      return { ...state, cardMarket: action.payload };
    },
    setCardMarketSetup: (state, action: PayloadAction<SetupCardInterface[]>) => {
      return { ...state, cardSetup: action.payload };
    },
  },
});

export default notesSlice.reducer;
