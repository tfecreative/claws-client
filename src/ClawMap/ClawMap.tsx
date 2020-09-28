import React from "react";
import GoogleMapReact from "google-map-react";
import { Marker } from "./Marker";
import { Location } from "./types";
import "./ClawMap.scss";

export type ClawMapProps = {
  apiKey: string;
  center: Location;
  locations: Location[];
  zoom: number;
};

export const ClawMap = ({ apiKey, center, locations, zoom }: ClawMapProps) => {
  const options = {
    disableDefaultUI: true,
  };

  return (
    <div className="claw-map" data-testid="claw-map">
      <div className="claw-map__map" data-testid="google-map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: apiKey }}
          defaultCenter={center}
          defaultZoom={zoom}
          options={options}
        >
          {locations.map((location, i) => {
            return (
              <Marker
                key={`marker-${i}`}
                lat={location.lat}
                lng={location.lng}
              />
            );
          })}
        </GoogleMapReact>
      </div>
    </div>
  );
};
