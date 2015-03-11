'use strict';

var React = require('react');
var reactBootstrap = require('react-bootstrap');
var Nav = reactBootstrap.Nav;
var NavItem = reactBootstrap.NavItem;

var Task = React.createClass({
  propTypes: {
    model: React.PropTypes.object
  },
  getDefaultProps: function() {
    return {
      model: {
        id: '',
        title: 'Empty',
        dueDate: '----'
      }
    };
  },
  render: function() {
    return (
      <tr>
        <td>
          <div>
            <label>
              <input type="checkbox" />
            </label>
          </div>
        </td>
        <td><a>{this.props.model.title}</a></td>
        <td>{this.props.model.dueDate}</td>
        <td>
          <a className="btn btn-default">
            <span className="glyphicon glyphicon-edit">
            </span>
          </a>
        </td>
      </tr>
    );
  }
});

var TaskListTable = React.createClass({
  propTypes: {
    tasks: React.PropTypes.arrayOf(React.PropTypes.object)
  },
  getDefaultProps: function() {
    return {
      tasks: []
    };
  },
  render: function() {
    return (
      <table className="table">
        <thead>
          <tr>
            <th className="col-xs-1">
              <div>
                <label>
                  <input type="checkbox" />
                </label>
              </div>
            </th>
            <th className="col-xs-8">Title</th>
            <th className="col-xs-2">Due Date</th>
            <th className="col-xs-1"></th>
          </tr>
        </thead>
        <tbody>
          {this.props.tasks.map(function(task) {
            return <Task key={task.id} model={task}/>;
          })}
        </tbody>
      </table>
    );
  }
});

var initialIncompleteTasks = [
  {
    id: 'abcdef',
    title: 'Study English',
    dueDate: '2015-02-23'
  }
];

var TaskList = React.createClass({
  getInitialState: function() {
    return {
      tasks: initialIncompleteTasks,
      activeKey: 0
    };
  },
  handleSelectTab: function(selectedKey) {
    if (selectedKey === 0) {
      this.setState({
        tasks: initialIncompleteTasks,
        activeKey: selectedKey
      });
    } else if (selectedKey === 1) {
      this.setState({
        tasks: [],
        activeKey: selectedKey
      });
    } else {
      throw new Error('This tab is not implemented');
    }
  },
  render: function() {
    return (
      <article>
        <header className="page-header">
          <h2>Tasks</h2>
        </header>
        <div className="task-list-toolbar row">
          <div className="btn-group col-xs-offset-1 col-xs-5" role="group">
            <button type="button" className="btn btn-default">
              <span className="glyphicon glyphicon-refresh">
              </span>
            </button>
            <button type="button" className="btn btn-default">
              <span className="glyphicon glyphicon-ok">
              </span>
            </button>
            <button type="button" className="btn btn-default">
              <span className="glyphicon glyphicon-remove">
              </span>
            </button>
          </div>
          <div className="btn-group col-xs-offset-5 col-xs-1" role="group">
            <a className="btn btn-primary">
               <span className="glyphicon glyphicon-plus">
               </span>
            </a>
          </div>
        </div>
        <hr/>
        <Nav bsStyle="tabs" activeKey={this.state.activeKey} onSelect={this.handleSelectTab}>
          <NavItem eventKey={0}>Incomplete</NavItem>
          <NavItem eventKey={1}>Complete</NavItem>
        </Nav>
        <TaskListTable tasks={this.state.tasks}/>
      </article>
    );
  }
});

module.exports = TaskList;
