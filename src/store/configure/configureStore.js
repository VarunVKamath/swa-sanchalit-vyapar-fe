// import { createStore } from "redux";
// import { globals } from "../globals";
// import { rootReducer } from "./rootReducer";
// import { applyMiddleware } from "redux";
// import { createBrowserHistory } from "history";
// import thunk from "redux-thunk";

// globals.history = createBrowserHistory();

// export const store = createStore(
//   rootReducer(globals.history),
//   {},
//   applyMiddleware(thunk)
// );

// globals.store = store;

import { applyMiddleware, createStore, compose } from "redux";
import { routerMiddleware } from "react-router-redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
// import storage from "redux-persist-indexeddb-storage";
import { rootReducer as reducer } from "./rootReducer";
const composeEnhancers =
  (process.env.NODE_ENV === "development"
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : null) || compose;

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["alert"],
};
const persistedReducer = persistReducer(persistConfig, reducer);
const createHistory = require("history").createBrowserHistory;

const history = createHistory();

const routeMiddleware = routerMiddleware(history);
const middlewares = [thunk, routeMiddleware];

export const store = createStore(
  persistedReducer,
  {},
  composeEnhancers(applyMiddleware(...middlewares))
);
// alert(JSON.stringify(store));
export const getState = () => {
  return store.getState();
};

export const getStore = () => {
  console.log("Store:", store);
  return store;
};

export function configureStore(initialState) {
  console.log("createHistory:", createHistory);
  if (module.hot) {
    // Enable Webpack hot module repylacement for reducers
    module.hot.accept("./rootReducer", () => {
      const nextRootReducer = require("./rootReducer");
      store.replaceReducer(nextRootReducer);
    });
  }

  let persistor = persistStore(store);
  //   console.log(persistor);
  //   console.log(store);
  return { store, persistor };
}
export { history };
