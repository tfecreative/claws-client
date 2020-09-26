import { CoreState, coreActions, ICoreAction } from "./types";

let initialState: CoreState = {};

export const reducer = (
  state: CoreState = initialState,
  action: ICoreAction
) => {
  switch (action.type) {
    case coreActions.RESET:
      return {
        ...state,
      };
  }
  return state;
};

export default reducer;
