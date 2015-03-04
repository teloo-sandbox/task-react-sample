'use strict';

var React = require('react');

var TaskList = React.createClass({
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
              <th className="col-xs-9">Title</th>
              <th className="col-xs-2">Due Date</th>
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
            </tr>
          </tbody>
        </table>
      </article>
    );
  }
});

module.exports = TaskList;
