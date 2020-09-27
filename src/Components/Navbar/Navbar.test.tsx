import React from "react";
import { render } from "@testing-library/react";
import { AppNavbar } from "./Navbar";
import type { NavbarProps } from "./Navbar";

const props: NavbarProps = {
  title: "AppTitle",
};

describe("Navbar", () => {
  it("brand title renders", () => {
    const { getByText } = render(<AppNavbar {...props} />);
    expect(getByText("AppTitle")).toBeTruthy();
  });
});
