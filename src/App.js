import React from "react";
import { Route, Switch } from "react-router-dom";
import './App.css';

import NavBar from "./components/navbar.jsx";
// import Footer from "./components/footer.jsx";
import Home from "./pages/home"
import Projects from "./pages/projects"
import About from "./pages/about"


function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
      <Route path='/about' component={About} />
      <Route path='/projects' component={Projects} />
      <Route path='/' component={Home} />
      </Switch>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
