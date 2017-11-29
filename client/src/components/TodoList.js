import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import TodoListItem from "./TodoListItem";
import { changeStatus, deleteTask } from "../actions/tasksActions";

class TodoList extends React.Component {
  handleTodoItemClick = todoId => {
    this.props.changeStatus(todoId);
  };

  handleTodoDelete = todoId => {
    this.props.deleteTask(todoId);
  };

  render() {
    return (
      <div>
        <ul>
          {!this.props.tasks && (
            <div className="center-align">
              <div className="preloader-wrapper active">
                <div className="spinner-layer spinner-red-only">
                  <div className="circle-clipper left">
                    <div className="circle" />
                  </div>
                  <div className="gap-patch">
                    <div className="circle" />
                  </div>
                  <div className="circle-clipper right">
                    <div className="circle" />
                  </div>
                </div>
              </div>
            </div>
          )}

          {this.props.tasks &&
            this.props.tasks.length === 0 && (
              <div>
                <h5 className="grey-text center-align">
                  Você não tem nenhuma tarefa registrada
                </h5>
              </div>
            )}

          {this.props.tasks &&
            this.props.tasks.map(task => {
              if (
                this.props.filter === "ALL" ||
                this.props.filter === task.status
              )
                return (
                  <TodoListItem
                    key={task.id}
                    task={task}
                    onTodoItemClick={this.handleTodoItemClick}
                    onTodoDelete={this.handleTodoDelete}
                  />
                );
              return "";
            })}
        </ul>
      </div>
    );
  }
}

function mapStateToProps({ tasks, filter }) {
  return { tasks, filter };
}

TodoList.propTypes = {
  filter: PropTypes.string.isRequired,
  changeStatus: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired
    })
  )
};

export default connect(mapStateToProps, { changeStatus, deleteTask })(TodoList);
