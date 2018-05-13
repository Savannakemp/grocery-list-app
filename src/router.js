import React from 'react';
import Home from './views/Home/Home.js';
import MyLists from './views/MyLists/MyLists.js';

import {Switch, Route} from 'react-router-dom';



export default (
    <Switch>
        <Route component={Home} exact path="/" />
        <Route component={MyLists} path="/mylists" />
    </Switch>
)