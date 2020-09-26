import React from "react";

import { IAppState } from "store/types";
import { Provider } from "react-redux";
import { Store } from "redux";
import { History } from "history";
import { ConnectedRouter } from "connected-react-router";
import Routes from "./Routes";
import "App/App.scss";

export interface MainProps {
  store: Store<IAppState>;
  history: History;
}

const App: React.FC<MainProps> = ({ store, history }) => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <div id="app" className="App">
          <div id="site-content" className="site-content">
            <Routes />
          </div>
        </div>
      </ConnectedRouter>
    </Provider>
  );
};

export default App;
