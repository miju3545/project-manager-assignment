import "./css/index.css";

import React from "react";
import { useRoutes } from "react-router-dom";
import routes from "./routes";
import { getStore } from "./redux";
import { Provider } from "react-redux";

export default function App() {
  const element = useRoutes(routes);
  const store = getStore();

  return (
    <Provider store={store}>
      <div className="App">{element}</div>
    </Provider>
  );
}
