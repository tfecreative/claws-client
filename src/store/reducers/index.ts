import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import { History } from "history";
import { IAppState } from "store/types";
import { reducer as authReducer } from "store/auth/reducers";
import { reducer as clawsReducer } from "store/claws/reducers";
import { reducer as coreReducer } from "store/core/reducers";

export const createRootReducer = (history: History) =>
  combineReducers<IAppState>({
    auth: authReducer,
    claws: clawsReducer,
    core: coreReducer,
    router: connectRouter(history),
  });
