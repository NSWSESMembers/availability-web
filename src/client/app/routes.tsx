import * as React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Layout from './Components/Screens/Layout/Index';
import Dashboard from './Components/Screens/Dashboard/Index';

export const routes = <Router>
    <Switch>
        <Layout>
            <Route exact path='/' component={Dashboard} />
        </Layout>
    </Switch>
</Router>;