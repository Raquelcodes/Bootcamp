import React, { Component } from "react";
import { connect } from "react-redux";
import { changeFilter } from "../../store/actions";

class Filter extends Component {
  handleFilterChange = e => {
    console.log(e.currentTarget.id);

    const action = changeFilter(e.currentTarget.id);
    this.props.dispatch(action);
  };

  isChecked = filter => filter === this.props.selectedFilter;

  render() {
    return (
      <div className="Filter">
        <input
          type="radio"
          name="filter"
          // all the todos
          id="all"
          checked={this.isChecked("all")}
          onChange={this.handleFilterChange}
        />
        <label htmlFor="all">All</label>
        <input
          type="radio"
          name="filter"
          // only completed todos
          id="completed"
          checked={this.isChecked("completed")}
          onChange={this.handleFilterChange}
        />
        <label htmlFor="completed">Completed</label>
        <input
          type="radio"
          name="filter"
          // uncompleted todos
          id="uncompleted"
          checked={this.isChecked("uncompleted")}
          onChange={this.handleFilterChange}
        />
        <label htmlFor="uncompleted">Uncompleted</label>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    selectedFilter: state.filter
  };
};

export default connect(mapStateToProps)(Filter);

//llorenc 's way using the state as an object:
