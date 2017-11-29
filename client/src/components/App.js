import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import "../App.css";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import { fetchTasks, addTask } from "../actions/tasksActions";

class App extends Component {
  state = {
    task: ""
  };

  componentDidMount() {
    this.props.fetchTasks();
  }

  handleTaskNameChange = task => {
    this.setState({ task });
  };

  handleNewTask = () => {
    if (this.state.task) {
      this.props.addTask(this.state.task);

      this.setState({ task: "" });
    }
  };

  render() {
    return (
      <div className="container row">
        <div className="col m4 offset-m4">
          <h4 className="center-align cursive">Todo com React & Rails</h4>
          <div className="right-align">
            <a href="https://github.com/goislimat" target="_blank">
              /goislimat
            </a>
          </div>
          <TodoForm
            task={this.state.task}
            onTaskChange={this.handleTaskNameChange}
            onFilterChange={this.handleFilterChange}
            onAddTask={this.handleNewTask}
          />
          <TodoList />
        </div>
      </div>
    );
  }
}

App.propTypes = {
  fetchTasks: PropTypes.func.isRequired,
  addTask: PropTypes.func.isRequired
};

export default connect(null, { fetchTasks, addTask })(App);
