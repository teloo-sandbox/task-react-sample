'use strict';

var React = require('react');

var TaskList = React.createClass({
  render: function() {
    return (
      <article>
        <header className="page-header">
          <h2>Tasks</h2>
        </header>
        <div className="task-list-toolbar">
          <a className="btn btn-primary pull-right">
            <span className="glyphicon glyphicon-plus">
            </span>
          </a>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th className="col-xs-1">
                <div class="checkbox">
                  <label>
                    <input type="checkbox" />
                  </label>
                </div>
              </th>
              <th className="col-xs-7">Title</th>
              <th className="col-xs-2">Due Date</th>
              <th className="col-xs-2"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div class="checkbox">
                  <label>
                    <input type="checkbox" />
                  </label>
                </div>
              </td>
              <td>Study English</td>
              <td>2015-02-23</td>
              <td>
                <a className="btn btn-default">
                  <span className="glyphicon glyphicon-ok"></span>
                </a>
                <a className="btn btn-default">
                  <span className="glyphicon glyphicon-edit"></span>
                </a>
                <a className="btn btn-default">
                  <span className="glyphicon glyphicon-trash"></span>
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </article>
    );
  }
});

module.exports = TaskList;
