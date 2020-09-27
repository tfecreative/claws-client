import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import { Footer, FooterProps } from "./Footer";

const props: FooterProps = {
  title: "AppTitle",
};

describe("Footer", () => {
  it("title renders", () => {
    const { getByTestId } = render(<Footer {...props} />);
    expect(getByTestId("footer-title")).toBeTruthy();
  });

  it("year renders when passed as prop", () => {
    const propsWithYear = {
      ...props,
      year: 2000,
    };
    const { getByTestId } = render(<Footer {...propsWithYear} />);
    expect(getByTestId("copyright-year")).toHaveTextContent("2000");
  });
});
