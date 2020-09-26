import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import { History } from "history";
import { IAppState } from "store/types";
import { reducer as coreReducer } from "store/core/reducers";

export const createRootReducer = (history: History) =>
  combineReducers<IAppState>({
    core: coreReducer,
    router: connectRouter(history),
  });
