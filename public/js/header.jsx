'use strict';

var React = require('react');
var reactBootstrap = require('react-bootstrap');
var Navbar = reactBootstrap.Navbar;
var Nav = reactBootstrap.Nav;
var NavItem = reactBootstrap.NavItem;

var toggleButton = (
  <button type="button">
    <span className="sr-only" key={0}>Toggle navigation</span>
    <span className="icon-bar" key={1}></span>
    <span className="icon-bar" key={2}></span>
    <span className="icon-bar" key={3}></span>
  </button>
);

var Header = React.createClass({
  render: function() {
    return (
      <Navbar fixedTop={true} brand="Task React Sample" toggleButton={toggleButton} toggleNavKey={0}>
        <Nav eventKey={0} collapsable={true}>
          <NavItem href="#/tasks">Tasks</NavItem>
        </Nav>
      </Navbar>
    );
  }
});

module.exports = Header;
