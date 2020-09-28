import { ClawsState, clawsActions, IClawsAction } from "./types";

let initialState: ClawsState = {
  locations: [],
};

export const reducer = (
  state: ClawsState = initialState,
  action: IClawsAction
) => {
  switch (action.type) {
    case clawsActions.SUBMIT_CLAW_MACHINE:
      return {
        ...state,
        placeId: action.placeId,
      };
    case clawsActions.SUBMIT_CLAW_MACHINE_STARTED:
      return {
        ...state,
      };
    case clawsActions.SUBMIT_CLAW_MACHINE_FINISHED:
      return {
        ...state,
      };
    case clawsActions.LOAD_CLAW_LOCATIONS:
      return {
        ...state,
      };
    case clawsActions.LOAD_CLAW_LOCATIONS_FINISHED:
      return {
        ...state,
        locations: action.locations,
      };
  }
  return state;
};

export default reducer;
