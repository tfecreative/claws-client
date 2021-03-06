import React from "react";
import { render } from "@testing-library/react";
import { PlaceSearch } from "./PlaceSearch";
import type { PlaceSearchProps } from "./PlaceSearch";

const props: PlaceSearchProps = {
  onChange: jest.fn(),
};

describe("PlaceSearch", () => {
  it("search input renders", () => {
    const { getByText } = render(<PlaceSearch {...props} />);
    expect(getByText("Select...")).toBeTruthy();
  });

  // it("fires onChange function when place is changed", () => {
  //   ...load mock data, select place and verify function call
  // });

  // it("results list displayed on input", () => {
  //   ...mock response data and verify list is displayed on input
  // });
});
