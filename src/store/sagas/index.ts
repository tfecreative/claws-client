import { all, fork } from "redux-saga/effects";
import { authFlow } from "store/auth/sagas";
import { coreSaga } from "store/core/sagas";
import { generators } from "store/claws/sagas";

export const rootSaga = function* root() {
  yield all([
    fork(coreSaga),
    fork(authFlow),
    fork(generators.watcher),
    fork(generators.watchLocations),
  ]);
};
