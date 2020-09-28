import { RouterState } from "connected-react-router";
import { AuthState } from "store/auth/types";
import { CoreState } from "store/core/types";
import { ClawsState } from "store/claws/types";

export interface IAppState {
  auth: AuthState;
  core: CoreState;
  claws: ClawsState;
  router: RouterState;
}
