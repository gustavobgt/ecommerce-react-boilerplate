import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { AppStateProvider } from 'state';
import App from 'App';
import reportWebVitals from 'reportWebVitals';

const history = createBrowserHistory();

ReactDOM.render(
    <React.StrictMode>
        <AppStateProvider>
            <Router history={history}>
                <App />
            </Router>
        </AppStateProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();
