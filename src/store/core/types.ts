export type CoreState = {};

export const coreActions = {
  RESET: "Reset store",
};

export interface ICoreAction {
  type: string;
}

export type ICoreActionReset = {
  type: typeof coreActions.RESET;
};

export type CoreActions = ICoreActionReset;
