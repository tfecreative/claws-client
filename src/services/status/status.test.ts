import { StatusService } from "services/status";
import { mocked } from "ts-jest/utils";

jest.mock("services/status", () => {
  return {
    StatusService: jest.fn().mockImplementation(() => {
      return {
        getStatus: () => {
          return { status: "OK", environment: "test" };
        },
      };
    }),
  };
});

describe("statusService test", () => {
  const MockedStatusService = mocked(StatusService, true);

  beforeEach(() => {
    MockedStatusService.mockClear();
  });

  it("Check if sign in is called", () => {
    const statusService = new StatusService();
    const resp = statusService.getStatus();
    expect(resp).toEqual({ status: "OK", environment: "test" });
  });
});
