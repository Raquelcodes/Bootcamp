//to create the dance floor here, style cells and create state to update colors
import './index.scss';
import React, { Component } from 'react';

const createCells = () => {
    const cells = Array(25).fill(1)
    return cells;
}



class App extends Component {
    state = {
        color: 'pink'
        

    }
}

updateState = () => {
    setTimeout(() => {
        let newColor = this.state.color;
        newColor = Math.floor(Math.random() * 16777215).toString(16);
        this.setState({
            color: newColor
        });
    }, 1000);
};

const cellLoop = ({ createCells }) => {
    return createCells.map(i => <div className="cell" background-color={this.state.color}></div>)
}


render = () => {
    return (
        <>
            <div className="cell" >{this.cellLoop}</div>
            <div className="dancefloor"></div>
        </>
    )
}

export default App


