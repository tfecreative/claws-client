import { AccountService } from "services/account";
import { mocked } from "ts-jest/utils";

jest.mock("services/account", () => {
  return {
    AccountService: jest.fn().mockImplementation(() => {
      return {
        signIn: () => {
          return { token: "thisisatesttoken" };
        },
      };
    }),
  };
});

describe("accountService test", () => {
  const MockedAccountService = mocked(AccountService, true);

  beforeEach(() => {
    MockedAccountService.mockClear();
  });

  it("Check if sign in is called", () => {
    const accountService = new AccountService();
    const resp = accountService.signIn('test', 'test');
    expect(resp).toEqual({token: 'thisisatesttoken'})
  });
});
