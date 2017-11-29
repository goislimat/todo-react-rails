import React from "react";
import PropTypes from "prop-types";

import NewTodoForm from "./NewTodoForm";
import Filters from "./Filters";

const TodoForm = props => (
  <div>
    <NewTodoForm
      task={props.task}
      onTaskChange={props.onTaskChange}
      onAddTask={props.onAddTask}
    />
    <Filters />
  </div>
);

TodoForm.propTypes = {
  task: PropTypes.string.isRequired,
  onTaskChange: PropTypes.func.isRequired,
  onAddTask: PropTypes.func.isRequired
};

export default TodoForm;
