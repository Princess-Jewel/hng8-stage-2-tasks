import React from 'react';
import './App.css';
import { Home, About, Contact, Projects, } from './pages';
import Nav from './components/Nav';
import Footer from './components/Footer';
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";

function App() {
  return (

    <div id="page-container">
      <Router>
        <Nav />
        <Switch>

          <div id="content-wrap">
            <Route exact path="/about">
              <About />
            </Route>

            <Route exact path="/contact">
              <Contact />
            </Route>

            <Route exact path="/projects">
              <Projects />
            </Route>

            <Route exact path="/">
              <Home />
            </Route>
          </div>
          
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
