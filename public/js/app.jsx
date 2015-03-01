'use strict';

var React = require('react');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;
var Header = require('./header.jsx');

var App = React.createClass({
  render: function() {
    return (
      <div>
        <header>
          <Header />
        </header>
        <section className="container">
          <RouteHandler />
        </section>
      </div>
    );
  }
});

module.exports = App;
