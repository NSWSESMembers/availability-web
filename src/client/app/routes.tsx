import * as React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Layout from './Components/Screens/Layout/Index';
import Dashboard from './Components/Screens/Dashboard/Index';
import Authenticated from "./Components/Utilities/Authenticated";
import Redirect from "./Components/Screens/Redirect";
import Requests from './Components/Screens/Requests/Index';
import ViewRequest from './Components/Screens/Requests/ViewRequest/Index';
import RequestDetails from './Components/Screens/Requests/RequestDetails/Index';
import Logout from './Components/Screens/Logout';

export const routes = <Router>
    <Switch>
        <Layout>
            <Route exact path='/' component={Authenticated(Dashboard)} />
            <Route path='/redirect' component={Redirect} />
            <Route path='/logout' component={Logout} />
            <Route exact path='/requests' component={Authenticated(Requests)} />
            <Route path='/requests/view-request' component={Authenticated(ViewRequest)} />
            <Route path='/requests/request-details' component={Authenticated(RequestDetails)} />
        </Layout>
    </Switch>
</Router>;