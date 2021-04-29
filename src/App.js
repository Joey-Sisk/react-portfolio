import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Project from "./pages/Project";
import NavBar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <main>
          <Route component={Home} path="/" exact></Route>
          <Route component={About} path="/about"></Route>
          <Route component={Contact} path="/contact"></Route>
          <Route component={Project} path="/project"></Route>
        </main>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
