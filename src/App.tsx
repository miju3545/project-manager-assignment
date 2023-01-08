import React from "react";
import { useRoutes } from "react-router-dom";
import routes from "./routes";
import { getStore } from "./redux/reducers";
import { Provider } from "react-redux";
import "./css/index.css";

export default function App() {
  const element = useRoutes(routes);
  const store = getStore();

  return (
    <Provider store={store}>
      <div className="App">{element}</div>
    </Provider>
  );
}
