import React from "react";
import PropTypes from "prop-types";

const onItemClick = props => {
  props.onTodoItemClick(props.task.id);
};

const onCrossClick = (props, e) => {
  e.stopPropagation();
  props.onTodoDelete(props.task.id);
};

const TodoListItem = props => (
  <div
    className={`row pilula block white-text clickable ${props.task.status}`}
    onClick={() => onItemClick(props)}
  >
    <span className={`col m11 ${props.task.status}`}>{props.task.name}</span>
    <i
      className="col m1 close material-icons white-text clickable"
      onClick={e => onCrossClick(props, e)}
    >
      close
    </i>
  </div>
);

TodoListItem.propTypes = {
  task: PropTypes.shape({
    name: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired
  }).isRequired
};

export default TodoListItem;
