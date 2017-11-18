import { trackPageView } from "./core/utils/analytics";
import "bootstrap/dist/css/bootstrap-theme.css";
import "bootstrap/dist/css/bootstrap.css";
import thunk from 'redux-thunk';
import initialState from './app/reducers/initialState'

import * as newCoreReducers from "./app/reducers/helloReducer";


export const reduxReducers = newCoreReducers;
export const reduxInitialState = initialState;
export const reduxMiddleware = [thunk];
//export const reduxMiddleware = [thunk];
export const onPageChange = function() {
  trackPageView().catch();
};

if (module.hot) module.hot.accept();