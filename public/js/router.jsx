'use strict';

var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var Redirect = Router.Redirect;

var App = require('./app.jsx');
var TaskList = require('./task-list.jsx');

var routes = (
  <Route handler={App} path="/">
    <Route name="tasks" path="tasks" handler={TaskList} />
    <Redirect from="/" to="tasks" />
  </Route>
);

Router.run(routes, function(Handler) {
  React.render(<Handler/>, document.getElementById('app'));
});
