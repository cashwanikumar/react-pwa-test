import { trackPageView } from "./core/utils/analytics";
import "bootstrap/dist/css/bootstrap-theme.css";
import "bootstrap/dist/css/bootstrap.css";
//import thunk from 'redux-thunk';

import * as newCoreReducers from "./app/reducers/helloReducer";


export const reduxReducers = newCoreReducers;
export const reduxInitialState = {test:{
  "title": "QWERTY"
}};
//export const reduxMiddleware = [thunk];
export const onPageChange = function() {
  trackPageView().catch();
};

if (module.hot) module.hot.accept();