'use strict';

/*eslint-disable no-unused-vars*/
var React = require('react');
/*eslint-enable no-unused-vars*/
var ReactTestUtils = require('react/lib/ReactTestUtils');
var TaskList = require('../../../public/js/task-list.jsx');

describe('TaskList', function() {
  it('Should create TaskList', function() {
    var instance = ReactTestUtils.renderIntoDocument(
      <TaskList />
    );

    assert.equal(instance.getDOMNode().nodeName, 'ARTICLE');

    // header
    var header = ReactTestUtils.findRenderedDOMComponentWithTag(instance, 'header');
    var pageTitle = ReactTestUtils.findRenderedDOMComponentWithTag(header, 'h2');
    assert.equal(pageTitle.getDOMNode().innerText, 'Tasks');

    // toolbar
    var toolbar = ReactTestUtils.findRenderedDOMComponentWithClass(instance, 'task-list-toolbar');
    var buttons = ReactTestUtils.scryRenderedDOMComponentsWithTag(toolbar, 'button');

    var button0Icon = ReactTestUtils.findRenderedDOMComponentWithTag(buttons[0], 'span');
    assert.equal(button0Icon.getDOMNode().className, 'glyphicon glyphicon-refresh');

    var button1Icon = ReactTestUtils.findRenderedDOMComponentWithTag(buttons[1], 'span');
    assert.equal(button1Icon.getDOMNode().className, 'glyphicon glyphicon-ok');

    var button2Icon = ReactTestUtils.findRenderedDOMComponentWithTag(buttons[2], 'span');
    assert.equal(button2Icon.getDOMNode().className, 'glyphicon glyphicon-remove');

    var addButton = ReactTestUtils.findRenderedDOMComponentWithTag(toolbar, 'a');
    var addButtonIcon = ReactTestUtils.findRenderedDOMComponentWithTag(addButton, 'span');
    assert.equal(addButtonIcon.getDOMNode().className, 'glyphicon glyphicon-plus');

    // table-head
    var thead = ReactTestUtils.findRenderedDOMComponentWithTag(instance, 'thead');
    var columnNames = ReactTestUtils.scryRenderedDOMComponentsWithTag(thead, 'th');
    assert.equal(columnNames.length, 4);
    var allCheckBox = ReactTestUtils.findRenderedDOMComponentWithTag(columnNames[0], 'input');
    assert.equal(allCheckBox.getDOMNode().type, 'checkbox');
    assert.equal(columnNames[1].getDOMNode().innerText, 'Title');
    assert.equal(columnNames[2].getDOMNode().innerText, 'Due Date');
    assert.equal(columnNames[3].getDOMNode().innerText, '');

    // table-content
    var tbody = ReactTestUtils.findRenderedDOMComponentWithTag(instance, 'tbody');
    var records = ReactTestUtils.scryRenderedDOMComponentsWithTag(tbody, 'tr');

    // record0
    var record0Columns = ReactTestUtils.scryRenderedDOMComponentsWithTag(records[0], 'td');
    var record0CheckBox = ReactTestUtils.findRenderedDOMComponentWithTag(columnNames[0], 'input');
    assert.equal(record0CheckBox.getDOMNode().type, 'checkbox');
    assert.equal(record0Columns[1].getDOMNode().innerText, 'Study English');
    assert.equal(record0Columns[2].getDOMNode().innerText, '2015-02-23');
    var record0EditButton = ReactTestUtils.findRenderedDOMComponentWithTag(record0Columns[3], 'a');
    var record0EditButtonIcon = ReactTestUtils.findRenderedDOMComponentWithTag(record0EditButton, 'span');
    assert.equal(record0EditButtonIcon.getDOMNode().className, 'glyphicon glyphicon-edit');
 });
});
