import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import SinglePost from "./components/SinglePost";
import Contact from "./components/Contact";
import Project from "./components/Project";
import NavBar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route component={Home} path="/" exact></Route>
        <Route component={About} path="/about"></Route>
        <Route component={SinglePost} path="/post/:slug"></Route>
        <Route component={Contact} path="/contact"></Route>
        <Route component={Project} path="/project"></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
