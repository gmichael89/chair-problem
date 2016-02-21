"use strict";

var React = require('react');
var ReactDOM = require('react-dom');
var Viewport = require('./components/Viewport');
var config = require('./config');

require("./styles/main.scss");

ReactDOM.render(<Viewport config={config} />, document.getElementById('App'));
