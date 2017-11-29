import React from "react";
import PropTypes from "prop-types";

class NewTodoForm extends React.Component {
  handleTaskChange = e => {
    this.props.onTaskChange(e.target.value);
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onAddTask();
  };

  render() {
    return (
      <form className="row" onSubmit={this.handleSubmit}>
        <div className="input-field col m8">
          <input
            name="todo"
            id="todo"
            type="text"
            value={this.props.task}
            onChange={this.handleTaskChange}
          />
          <label htmlFor="todo">Tarefa</label>
        </div>
        <div className="col m4">
          <button className="waves-effect waves-light btn add-btn">Add</button>
        </div>
      </form>
    );
  }
}

NewTodoForm.propTypes = {
  task: PropTypes.string.isRequired,
  onTaskChange: PropTypes.func.isRequired,
  onAddTask: PropTypes.func.isRequired
};

export default NewTodoForm;
