import React from "react";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import "./PlaceSearch.scss";

export type PlaceSearchProps = {
  apiKey?: string;
  onChange: any;
};

export const PlaceSearch = ({ apiKey, onChange }: PlaceSearchProps) => {
  const handleChange = (obj: any) => {
    onChange(obj);
  };
  return (
    <div className="place-search" data-testid="place-search">
      <GooglePlacesAutocomplete
        apiKey={apiKey}
        selectProps={{ onChange: handleChange }}
      />
    </div>
  );
};
