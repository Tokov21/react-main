import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import MainPage from "./pages/MainPage";
import SignupPage from "./pages/SignupPage";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MainPage />
        </Route>
        <Route exact path="/register">
          <SignupPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
