import { call, takeEvery, put } from "redux-saga/effects";
import { clawsActions, IClawsAction } from "store/claws/types";
import { clawsService } from "services/claws";

function* watchClawMachineLoadClaws() {
  yield takeEvery(
    clawsActions.LOAD_CLAW_LOCATIONS,
    clawMachineLocationScheduler
  );
}

function* watchClawMachineSubmissionRequested() {
  yield takeEvery(
    clawsActions.SUBMIT_CLAW_MACHINE,
    clawMachineSubmissionsScheduler
  );
}

function* clawMachineSubmissionsScheduler(action: IClawsAction) {
  const placeId = action.placeId;

  if (placeId) {
    yield put({ type: clawsActions.SUBMIT_CLAW_MACHINE_STARTED });
    yield call(clawsService.submit, placeId);
    yield put({ type: clawsActions.SUBMIT_CLAW_MACHINE_FINISHED });
  }
}

function* clawMachineLocationScheduler(action: IClawsAction) {
  yield put({ type: clawsActions.SUBMIT_CLAW_MACHINE_STARTED });
  const { locations } = yield call(clawsService.getLocations);
  yield put({
    type: clawsActions.LOAD_CLAW_LOCATIONS_FINISHED,
    locations,
  });
}

export const generators = {
  watcher: watchClawMachineSubmissionRequested,
  watchLocations: watchClawMachineLoadClaws,
  scheduler: clawMachineSubmissionsScheduler,
};

export default clawMachineSubmissionsScheduler;
