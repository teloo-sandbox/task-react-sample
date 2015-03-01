'use strict';

/*eslint-disable no-unused-vars*/
var React = require('react');
/*eslint-enable no-unused-vars*/
var ReactTestUtils = require('react/lib/ReactTestUtils');
var Header = require('../../../public/js/header.jsx');
var URI = require('URIjs');

describe('Header', function() {
  it('Should create Header', function() {
    var instance = ReactTestUtils.renderIntoDocument(
      <Header />
    );

    assert.equal(instance.getDOMNode().nodeName, 'NAV');

    var brand = ReactTestUtils.findRenderedDOMComponentWithClass(instance, 'navbar-brand');
    assert.equal(brand.getDOMNode().innerText, 'Task React Sample');

    var nav = ReactTestUtils.findRenderedDOMComponentWithClass(instance, 'navbar-collapse');
    var links = ReactTestUtils.scryRenderedDOMComponentsWithTag(nav, 'a');

    assert.equal(new URI(links[0].getDOMNode().href).fragment(), '/tasks');
    assert.equal(links[0].getDOMNode().innerText, 'Tasks');
 });
});
