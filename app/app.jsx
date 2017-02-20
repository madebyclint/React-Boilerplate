var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');

// Load Foundation
require('foundation-sites/dist/css/foundation.min.css');
$(document).foundation();

// App CSS
// Fix required http://stackoverflow.com/questions/40201262/webpack-css-syntaxerror-unexpected-token
require('applicationStyles');

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Main}>
        </Route>
    </Router>,
    document.getElementById('app')
);