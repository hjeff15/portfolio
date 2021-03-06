import React from 'react';
import { BrowserRouter, Route, Switch} from "react-router-dom";

import Menu from './Menu';
import Me from "./Me";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Menu}></Route>
            <Route path="/skills" component={Skills}></Route>
            <Route path="/me" component={Me}></Route>
            <Route path="/projects" component={Projects}></Route>
            <Route path="/contact" component={Contact}></Route>
        </Switch>
    </BrowserRouter>
);

export default Router;