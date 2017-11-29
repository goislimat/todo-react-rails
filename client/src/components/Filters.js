import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { changeVisibility } from "../actions/filterActions";

class Filters extends React.Component {
  countUndone = () =>
    this.props.tasks.filter(task => task.status === "UNDONE").length;

  render() {
    return (
      <div className="row center-align">
        <h6>Filtros</h6>
        <div className="collection col m8 offset-m2">
          <div className="collection-item">
            <span className="new badge teal" data-badge-caption="">
              {!this.props.tasks ? "..." : this.props.tasks.length}
            </span>
            {this.props.filter === "ALL" ? (
              <b>Todas</b>
            ) : (
              <span
                className="clickable"
                onClick={() => this.props.changeVisibility("ALL")}
              >
                Todas
              </span>
            )}
          </div>
          <div className="collection-item">
            <span className="new badge cyan" data-badge-caption="">
              {!this.props.tasks ? "..." : this.countUndone()}
            </span>
            {this.props.filter === "UNDONE" ? (
              <b>A Fazer</b>
            ) : (
              <span
                className="clickable"
                onClick={() => this.props.changeVisibility("UNDONE")}
              >
                A Fazer
              </span>
            )}
          </div>
          <div className="collection-item">
            <span className="new badge pink lighten-1" data-badge-caption="">
              {!this.props.tasks
                ? "..."
                : this.props.tasks.length - this.countUndone()}
            </span>
            {this.props.filter === "DONE" ? (
              <b>Completadas</b>
            ) : (
              <span
                className="clickable"
                onClick={() => this.props.changeVisibility("DONE")}
              >
                Completadas
              </span>
            )}
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ tasks, filter }) {
  return { tasks, filter };
}

Filters.propTypes = {
  filter: PropTypes.string.isRequired,
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired
    })
  ),
  changeVisibility: PropTypes.func.isRequired
};

export default connect(mapStateToProps, { changeVisibility })(Filters);
