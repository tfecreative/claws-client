import { coreActions, ICoreAction } from "./types";

export const reset = (): ICoreAction => {
  return {
    type: coreActions.RESET,
  };
};
