import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Home from "./components/Home/Home";
import Game from "./containers/Game/Game";

import { Provider } from "react-redux";
import store from "./store/store";

import "./App.css";

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Route exact path="/" component={Home} />
      <Route path="/game" component={Game} />
    </BrowserRouter>
  </Provider>
);

export default App;
