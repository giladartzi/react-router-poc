import React from 'react';
import { Route, IndexRoute } from 'react-router';

import PocApp from '../components/PocApp';
import ModuleA from '../components/ModuleA';
import ModuleB from '../components/ModuleB';
import ModuleC from '../components/ModuleC';

module.exports = (
    <Route path="/" component={PocApp}>
        <IndexRoute component={ModuleA}/>
        <Route path="/b(/:str)" component={ModuleB}/>
        <Route path="/c" component={ModuleC}/>
    </Route>
);