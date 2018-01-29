import * as React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Layout from './Components/Screens/Layout/Index';
import Dashboard from './Components/Screens/Dashboard/Index';
import Authenticated from "./Components/Utilities/Authenticated";
import Redirect from "./Components/Screens/Redirect";

export const routes = <Router>
    <Switch>
        <Layout>
            <Route exact path='/' component={Authenticated(Dashboard)} />
            <Route path='/redirect' component={Redirect} />
        </Layout>
    </Switch>
</Router>;