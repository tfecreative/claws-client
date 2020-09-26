import { all, fork } from "redux-saga/effects";
import { coreSaga } from "store/core/sagas";

export const rootSaga = function* root() {
  yield all([fork(coreSaga)]);
};
