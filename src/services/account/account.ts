import { HttpClient } from "services/Http/HttpClient";
import { SignInResponse } from "./Types";

export class AccountService extends HttpClient {
  public signIn = async (
    username: string,
    password: string
  ): Promise<SignInResponse> => {
    return await this.client
      .post<SignInResponse>("auth/sign-in/", { username, password })
      .then(({ data }) => data);
  };
}

export const accountService = new AccountService();
