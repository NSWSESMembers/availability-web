import * as React from 'react';
import {render} from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import * as RoutesModule from './routes';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { Provider } from 'react-redux';
import store from './Components/Store';

let routes = RoutesModule.routes;

function renderApp() {
    render(
        <Provider store={store}><BrowserRouter children={routes} /></Provider>,
        document.getElementById('app')
    );
}

renderApp();

// Allow Hot Module Replacement
if (module.hot) {
    module.hot.accept('./routes', () => {
        routes = require<typeof RoutesModule>('./routes').routes;
        renderApp();
    });
}