import * as React from 'react';
import {render} from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import * as RoutesModule from './routes';

const routes = RoutesModule.routes;

function renderApp() {
    render(
        <BrowserRouter children={routes} basename="/" />,
        document.getElementById('app')
    );
}

renderApp();

// Allow Hot Module Replacement
// if (module.hot) {
//     module.hot.accept('./routes', () => {
//         routes = require<typeof RoutesModule>('./routes').routes;
//         renderApp();
//     });
// }