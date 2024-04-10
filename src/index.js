import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Switch, Route, Router } from "react-router-dom";
import { ReactNotifications } from "react-notifications-component";
import { ConnectedRouter } from "connected-react-router";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-notifications-component/dist/theme.css";

import App from "./components/pages";
import "./App.scss";
import { Alert, BigLoader } from "./components/common";
import { globals } from "./store/globals";

import { configureStore, history } from "./store/configure/configureStore";
import { PersistGate } from "redux-persist/integration/react";

import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
export const { store, persistor } = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ReactNotifications />
      <BigLoader />
      <Router history={history}>
        <Switch>
          <Route path="/" component={App} />
        </Switch>
        <Alert />
      </Router>
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);

serviceWorkerRegistration.register();
