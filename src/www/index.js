import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';

import routes from './routes/routes'

const node = (
    <Router history={browserHistory} routes={routes} />
);

ReactDOM.render(node, document.getElementById('pocApp'));