import React, {Component} from 'react';
import {connect} from 'react-redux'
import './index.css';
import {addTodoAction, makeFilterUpdate} from "../../store/actions";

class App extends Component {

    constructor(props) {
        super(props)

        this.state = {
            newTodo: '',
            filter: "all"
        }
    }

    handleInputChange = e => {
        this.setState({
            newTodo: e.currentTarget.value// here goes the value from the input
        })
    }

    handleFilterChange = e => {
        console.log('let us change filter')
        // this.setState({
        //     filter: e.currentTarget.value// here goes the value from the input
        // })
    }

    updateFilter = () => {
        this.props.dispatch(makeFilterUpdate(this.state.filter))
    }

    addNewTodo = () => {
        this.props.dispatch(addTodoAction(this.state.newTodo))
    }

    render() {
        console.log("props7:",this.props.todos)
        return (
            <div className="App">
                <h1>3rd Small Change</h1>
                <div>
                    <h1>Add New Todo</h1>
                    <input
                        type='text'
                        value={this.state.newTodo}
                        placeholder='New todo...'
                        onChange={this.handleInputChange}
                    />
                    <button onClick={this.addNewTodo}>Submit</button>
                </div>
                <div>
                    <h1>Todo List</h1>
                    <ul>
                        {this.props.todos.map(item=> <li>{item}</li>)}
                    </ul>
                </div>
                <hr/>
                <div>filters:</div>
                <div className="filterbox">
               <div  id="pending"
                   className="filter pending">
                    <input type="radio" name="filter"/>
                    <label htmlFor="pending">Pending</label>
                </div>

                <div id="completed"
                     className="filter completed"
                                        onClick={console.log("change filter")}>

                      <input type="radio" name="filter"/>
                      <label htmlFor="completed">Completed</label>
                </div>

                <div id="all"
                     className="filter all"
                                         onClick={console.log("change filter")}>

                     <input type="radio" name="filter" />
                     <label htmlFor="all">All</label>
                </div>

            </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log("state2:", state)
    return {
        todos:state.todoListReducer
    }
};

export default connect(mapStateToProps)(App);
