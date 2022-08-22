import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app'

ReactDOM.render(
    <App />,
    document.getElementById('root')
);


setTimeout( () => {
    ReactDOM.render(
        <h1>
            ...
        </h1>,
        document.getElementById('root')
    );
}, 4000);
