import { ForkEffect, takeEvery } from 'redux-saga/effects';
import { GENERATE_CARD_MARKET } from './cards/cardsActions';
import { marketSet } from './cards/saga';

function* mainSaga(): Generator<ForkEffect<never>, void, unknown> {
  yield takeEvery(GENERATE_CARD_MARKET, marketSet);
  // yield takeEvery(REQUEST_CREATE_NOTE, noteCreate);
  // yield takeEvery(REQUEST_CHANGE_NOTE, noteChange);
  // yield takeEvery(REQUEST_DELETE_NOTE, noteDelete);
  // yield takeEvery(REQUEST_DELETE_HASHTAG, hashtagDelete);
  // yield takeEvery(REQUEST_CREATE_HASHTAG, hashtagCreate);
}

export default mainSaga;
