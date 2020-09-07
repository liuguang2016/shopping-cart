import { compose, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

export default (initialState?: any) => {
  let state = window.localStorage.getItem("state");
  initialState = (state && JSON.parse(state)) || initialState;
  const middleware = [thunk];

  const store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(...middleware)
    )
  );

  store.subscribe(() => {
    const state = store.getState();
    const persist = {
      cart: state.cart,
      total: state.total,
    };

    window.localStorage.setItem("state", JSON.stringify(persist));
  });

  return store;
};
