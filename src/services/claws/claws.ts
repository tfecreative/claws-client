import { HttpClient } from "services/Http/HttpClient";
import {
  ClawMachineLocationsResponse,
  ClawMachineSubmissionResponse,
} from "./types";

export class ClawsService extends HttpClient {
  public submit = async (
    placeId: string
  ): Promise<ClawMachineSubmissionResponse> => {
    return await this.client
      .post<ClawMachineSubmissionResponse>("claws/submit/", { placeId })
      .then(({ data }) => data);
  };

  public getLocations = async (): Promise<ClawMachineLocationsResponse> => {
    return await this.client
      .get<ClawMachineLocationsResponse>("claws/")
      .then(({ data }) => data);
  };
}

export const clawsService = new ClawsService();
