import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { AppStateProvider } from 'state';
import App from 'App';
import reportWebVitals from 'reportWebVitals';
import 'antd/dist/antd.css';

ReactDOM.render(
    <React.StrictMode>
        <AppStateProvider>
            <Router>
                <App />
            </Router>
        </AppStateProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();
