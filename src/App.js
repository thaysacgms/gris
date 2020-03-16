import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Intro from "./components/Intro";
import Calendario from "./pages/calendario";
import Acoes from "./pages/acoes";
import Navbar from "./components/Navbar";
import QuemSomos from "./pages/quemsomos";
import Footer from "./components/Footer";


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
        <Navbar />
        <Intro/>
        <Home />
        </Route>
        <Route exact path="/quemsomos">
          <Navbar />
          <QuemSomos />
        </Route>
        <Route exact path="/acoes">
          <Navbar />
          <Acoes />
        </Route>
        <Route exact path="/calendario">
          <Navbar />
          <Calendario />
        </Route>
      </Switch>

    <Footer />
    </Router>
  );
}

export default App;
