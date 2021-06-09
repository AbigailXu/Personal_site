import logo from './logo.svg';
import React, { Component, Fragment } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import './App.css';

import Home from "./pages/home"

function App() {
  return (
    <div className="App">
      <Switch>
      <Route path='/' component={Home} />

      </Switch>
    </div>
  );
}

export default App;
