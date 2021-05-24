import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Provider from 'state/context';
import App from 'App';
import reportWebVitals from 'reportWebVitals';

const history = createBrowserHistory();

ReactDOM.render(
    <React.StrictMode>
        <Provider>
            <Router history={history}>
                <App />
            </Router>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();
