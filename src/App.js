import React from "react";
import { Route, Switch } from "react-router-dom";
import './App.css';

import NavBar from "./components/navbar.jsx";
import Home from "./pages/home"
import Projects from "./pages/projects"

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
      <Route path='/projects' component={Projects} />
      <Route path='/about' component={Home} />
      <Route path='/' component={Home} />
      </Switch>
    </div>
  );
}

export default App;
