import { Store, combineReducers, createStore } from "redux";
import lists from "./lists";

const rootReduer = combineReducers({
  lists,
});

export type RootState = ReturnType<typeof rootReduer>;

export const getStore = (() => {
  let store: Store | null = null;

  return () => {
    if (!store) store = createStore(rootReduer);
    return store;
  };
})();
