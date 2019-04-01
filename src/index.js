import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";

import Navigation from "./components/Navigation/Navigation";
import Pages from "./Pages/Router/Router";

import "./index.css";

const App = () => (
  <BrowserRouter>
    <div>
      <Navigation />
      <Pages />
    </div>
  </BrowserRouter>
);

render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
