import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Landing from './pages/landing';
import Orphanages from './pages/OrphanagesMap';
import Orphanage from './pages/Orphanage';
import CreateOrphanage from './pages/CreateOrphanage';

function Routes(){
    return (
        <BrowserRouter>
            <Switch>
            <Route path="/" component={Landing} exact></Route>
            <Route path="/app" component={Orphanages}></Route>
            <Route path="/orphanages/create" component={CreateOrphanage}></Route>
            <Route path="/orphanages/:id" component={Orphanage}></Route>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;