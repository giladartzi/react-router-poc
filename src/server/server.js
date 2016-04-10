var express = require('express');
var fs = require('fs');
var path = require('path');
var handlebars = require('handlebars');

import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import routes from '../www/routes/routes';

var app = express();

var index = fs.readFileSync(path.resolve(__dirname, '..', '..', 'public', 'index.html'), 'utf-8');
var indexTemplate = handlebars.compile(index);

// serve our static stuff like index.css
app.use(express.static('public'));

app.get('/favicon.ico', (req, res) => {
    res.sendStatus(404);
});

app.get('*', (req, res) => {
    // match the routes to the url
    match({ routes: routes, location: req.url }, (err, redirect, props) => {
        // `RouterContext` is the what `Router` renders. `Router` keeps these
        // `props` in its state as it listens to `browserHistory`. But on the
        // server our app is stateless, so we need to use `match` to
        // get these props before rendering.
        const appHtml = renderToString(<RouterContext {...props}/>);

        // dump the HTML into a template, lots of ways to do this, but none are
        // really influenced by React Router, so we're just using a little
        // function, `renderPage`
        res.send(renderPage(appHtml))
    })
});

function renderPage(appHtml) {
    return indexTemplate({ appHtml });
}

var PORT = process.env.PORT || 8080;
app.listen(PORT, function() {
    console.log('Production Express server running at localhost:' + PORT)
});