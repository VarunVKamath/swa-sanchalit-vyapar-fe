import { combineReducers } from "redux";
import alert from "../alert/alertReducer";
import loader from "../loader/loaderReducer";
import sidebar from "../sidebar/sidebarReducer";
import auth from "../auth/authReducer";
import otpVerification from "../otpverification/otpVerificationReducer";
import { routerReducer } from "react-router-redux";

export const rootReducer = combineReducers({
  // router: connectRouter(history),
  router: routerReducer,
  alert,
  auth,
  loader,
  sidebar,
  otpVerification,
});
