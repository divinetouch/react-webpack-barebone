import React from 'react';
import Home from './sections/home';
import About from './sections/about';
import Contact from './sections/Contact';
import Template from './template';
import {Router, Route, IndexRoute} from 'react-router';

export default () => {
    return (
                <Router>  
                    <Route path="/" component={Template}>
                        <IndexRoute component={Home} />
                        <Route path="/about" component={About} />
                        <Route path="/contact" component={Contact} />
                    </Route>
                </Router>
            );
};
