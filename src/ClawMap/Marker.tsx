import React from "react";
import "./Marker.scss";

export type MarkerProps = {
  lat: number;
  lng: number;
};

export const Marker = ({ lat, lng }: MarkerProps) => {
  return (
    <div data-testid={`marker-${lat}-${lng}`} className="marker">
      <img
        className="marker__image"
        src="images/claw-machine-marker.png"
        alt="Map Marker"
      ></img>
    </div>
  );
};
