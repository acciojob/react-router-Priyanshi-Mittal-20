import React from "react";
import './../styles/App.css';
import {BrowserRouter ,Switch , Route , Link} from "react-router-dom"
import Navigation from "./Navigation";
import Home from "./Home";
import About from "./About";

const App = () => {
  return (
    <BrowserRouter>
        <Navigation />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
        </Switch>
    </BrowserRouter>
  );
};

export default App;