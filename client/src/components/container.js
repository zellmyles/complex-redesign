import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from './home.js';
import Nav from './nav.js'
import Footer from './footer.js'
import Top from './topstories.js'
import Shoes from './shoes.js';
import Discover from './discover.js';
import Music from './musicexplore.js'
import Contact from './contact.js';
import List from './list.js'
// react routing 
//do not touch


function Container(location) {
         {/* default path is set to home */}
          {/* switch is used to render one component at a time */}
    return (
 

        <Switch>
   
          <Route exact path="/" component={Home} />
          <Route exact path="/music" component={Music} />
          <Route exact path="/contact" component={Contact} />
          {/* <Route exact path="/contact" component={Footer} /> */}
          <Route exact path="/shoes" component={Shoes} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
       

  );
};

export default Container;