import { RouterState } from "connected-react-router";
import { CoreState } from "store/core/types";

export interface IAppState {
  core: CoreState;
  router: RouterState;
}
