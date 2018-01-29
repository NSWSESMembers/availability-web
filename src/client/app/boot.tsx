import * as React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import * as RoutesModule from './routes';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { Provider } from 'react-redux';
import store from './Components/Store';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

let routes = RoutesModule.routes;

function renderApp() {
    render(
        <Provider store={store}>
            <MuiThemeProvider>
                <BrowserRouter children={routes} />
            </MuiThemeProvider>
        </Provider>,
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