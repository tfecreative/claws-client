import { clawsActions, IClawsAction } from "./types";

export const loadClawLocations = (): IClawsAction => {
  return {
    type: clawsActions.LOAD_CLAW_LOCATIONS,
  }
}

export const submitClawMachine = (placeId: string): IClawsAction => {
  return {
    type: clawsActions.SUBMIT_CLAW_MACHINE,
    placeId,
  };
};

export const submitClawMachineStarted = (): IClawsAction => {
  return {
    type: clawsActions.SUBMIT_CLAW_MACHINE_STARTED,
  };
};

export const submitClawMachineFinished = (): IClawsAction => {
  return {
    type: clawsActions.SUBMIT_CLAW_MACHINE_FINISHED,
  };
};
