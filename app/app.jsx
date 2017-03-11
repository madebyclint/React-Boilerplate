import React from 'react'
import ReactDOM from 'react-dom'
import {Route, Router, IndexRoute, hashHistory} from 'react-router'

// import jquery just for foundation
import jQuery from 'jquery'
window.$ = window.jQuery = jQuery

// Load Foundation
$(document).foundation()

// App CSS
// Fix required http://stackoverflow.com/questions/40201262/webpack-css-syntaxerror-unexpected-token
require('applicationStyles')

ReactDOM.render(
    <p>React Boilerplate 3 Project</p>,
    document.getElementById('app')
)
