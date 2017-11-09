import { trackPageView } from "./core/utils/analytics";
import "bootstrap/dist/css/bootstrap-theme.css";
import "bootstrap/dist/css/bootstrap.css";

export const reduxInitialState = {};
export const reduxReducers = null;
export const onPageChange = function() {
  trackPageView().catch();
};

if (module.hot) module.hot.accept();