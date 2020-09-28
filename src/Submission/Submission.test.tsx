import React from "react";
import { Provider } from "react-redux";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import { Submission } from "./Submission";
import configureStore from "store/store.config";
import { createMemoryHistory } from "history";

const history = createMemoryHistory();
const initialState: any = {};
const store = configureStore(history, initialState);

describe("Submission", () => {
  it("renders place search", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Submission />
      </Provider>
    );
    expect(getByTestId("place-search")).toBeTruthy();
  });
});
