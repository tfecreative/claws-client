import React from "react";
import { render } from "@testing-library/react";
import { ClawMap } from "./ClawMap";
import type { ClawMapProps } from "./ClawMap";

const props: ClawMapProps = {
  apiKey: "",
  center: { lat: 42.3314, lng: 83.0458 },
  locations: [{ lat: 42.382149, lng: -82.939545 }],
  zoom: 11,
};

const renderTest = () => {
  const { getByTestId } = render(<ClawMap {...props} />);
  const container = getByTestId("claw-map");
  return { getByTestId, container };
};

describe("Claw Map", () => {
  it("renders a marker for each location", () => {
    const { getByTestId } = renderTest();
    const locations = props.locations;
    for (const loc of locations) {
      const marker = getByTestId(`marker-${loc.lat}-${loc.lng}`);
      expect(marker).toBeInTheDocument();
    }
  });
});
