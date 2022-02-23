import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

ReactDOM.hydrate(
    <ReactDOM.StrictMode>
        <App/>
    </ReactDOM.StrictMode>,
    document.getElementById('root')
);