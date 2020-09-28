import { ClawsService } from "services/claws";
import { mocked } from "ts-jest/utils";

jest.mock("services/claws", () => {
  return {
    ClawsService: jest.fn().mockImplementation(() => {
      return {
        signIn: () => {
          return { token: "thisisatesttoken" };
        },
      };
    }),
  };
});

describe("accountService test", () => {
  const MockedClawsService = mocked(ClawsService, true);

  beforeEach(() => {
    MockedClawsService.mockClear();
  });

  it("Check if sign in is called", () => {
    const clawsService = new ClawsService();
    const resp = clawsService.signIn('test', 'test');
    expect(resp).toEqual({token: 'thisisatesttoken'})
  });
});
