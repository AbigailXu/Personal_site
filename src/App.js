import React from "react";
import ReactDOM from 'react-dom'
import { Route, Switch } from "react-router-dom";
import './App.css';

// fontawsome
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

import Main from "./Main/Main"

library.add(far, fas, fab);





function App() {
  return (
    <div className="App">
      {/* <NavBar /> */}
      <Main/>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
