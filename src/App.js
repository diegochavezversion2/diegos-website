import './App.css';
import React from 'react';
import { Route, Switch } from "react-router-dom";
import Header from './header-with-nav/header';
import Body from './body/Body';
import Resume from './resume/Resume';
import Projects from './projects/Projects';
import Contact from './contact/Contact';

function App() {
  return (
    <>
      <Header />
      <div className="App">
        <Switch>
          <Route exact={true} path="/">
              <Body />
          </Route>
          <Route exact={true} path="/resume">
              <Resume />
          </Route>
          <Route exact={true} path="/projects">
              <Projects />
          </Route>
          <Route exact={true} path="/contact">
              <Contact />
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default App;
