import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import mainSaga from './mainSaga';
import cardsReduser from './cards/cardsSlice';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    cards: cardsReduser,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(mainSaga);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
