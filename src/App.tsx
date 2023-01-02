import React from "react";
import { useRoutes } from "react-router-dom";
import routes from "./routes";
import { getStore } from "./redux";
import { Provider } from "react-redux";

function App() {
  const element = useRoutes(routes);
  const store = getStore();

  return (
    <Provider store={store}>
      <div className="App">{element}</div>
    </Provider>
  );
}

export default App;
