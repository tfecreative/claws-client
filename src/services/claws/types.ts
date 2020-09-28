import { Location } from "ClawMap/types";

export type ClawMachineSubmissionRequest = {
  placeId: string;
};

export type ClawMachineSubmissionResponse = {
  success: boolean;
};

export type ClawMachineLocationsResponse = {
  locations: Location[]
}
