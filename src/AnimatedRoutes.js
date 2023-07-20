import React from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import Body from './body/Body';
import Resume from './resume/Resume';
import Projects from './projects/Projects.js';
import { AnimatePresence } from "framer-motion"

function AnimatedRoutes() {
    const location = useLocation();
    return (
        <AnimatePresence>
            <Switch location={location} key={location.pathname}>
                <Route exact={true} path="/">
                    <Body />
                </Route>
                <Route exact={true} path="/resume">
                    <Resume />
                </Route>
                <Route exact={true} path="/projects">
                    <Projects />
                </Route>
            </Switch>
        </AnimatePresence>
    )
}

export default AnimatedRoutes;