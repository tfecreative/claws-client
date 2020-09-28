import { HttpClient } from "services/Http/HttpClient";
import { StatusResponse } from "./types";

export class StatusService extends HttpClient {
  public getStatus = async (): Promise<StatusResponse> => {
    return await this.client
      .post<StatusResponse>("status/")
      .then(({ data }) => data);
  };
}

export const statusService = new StatusService();
