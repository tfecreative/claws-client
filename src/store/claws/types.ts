import { Location } from "ClawMap/types";

export type ClawsState = {
  locations?: Location[];
};

export const clawsActions = {
  LOAD_CLAW_LOCATIONS: "Claw locations requested",
  LOAD_CLAW_LOCATIONS_STARTED: "Loading claw locations",
  LOAD_CLAW_LOCATIONS_FINISHED: "Loaded claw locations",
  SUBMIT_CLAW_MACHINE: "Claw machine submission requested",
  SUBMIT_CLAW_MACHINE_STARTED: "Claw machine submission started",
  SUBMIT_CLAW_MACHINE_FINISHED: "Claw machine submission finished",
};

export interface IClawsAction {
  type: string;
  placeId?: string;
  locations?: Location[];
}

export type IClawsActionSubmitClawMachine = {
  type: typeof clawsActions.SUBMIT_CLAW_MACHINE;
};

export type IClawsActionSubmitClawMachineStarted = {
  type: typeof clawsActions.SUBMIT_CLAW_MACHINE_STARTED;
};

export type IClawsActionSubmitClawMachineFinished = {
  type: typeof clawsActions.SUBMIT_CLAW_MACHINE_FINISHED;
};

export type IClawsActionLoadClawLocations = {
  type: typeof clawsActions.LOAD_CLAW_LOCATIONS;
};

export type IClawsActionLoadClawLocationsStarted = {
  type: typeof clawsActions.LOAD_CLAW_LOCATIONS_STARTED;
};

export type IClawsActionLoadClawLocationsFinished = {
  type: typeof clawsActions.LOAD_CLAW_LOCATIONS_FINISHED;
};

export type ClawsActions =
  | IClawsActionSubmitClawMachine
  | IClawsActionSubmitClawMachineStarted
  | IClawsActionSubmitClawMachineFinished
  | IClawsActionLoadClawLocations
  | IClawsActionLoadClawLocationsFinished;
