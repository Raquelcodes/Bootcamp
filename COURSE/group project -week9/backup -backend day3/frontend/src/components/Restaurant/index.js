import React, {Component} from 'react';
import {connect} from 'react-redux';
import CreateRestaurant from './createRestaurant/index';
import Search from '../Search/index';
import {getRestaurant} from "../../store/action/restaurantAction";
import './index.css';


class Restaurant extends Component {

    componentDidMount = () => {
        this.props.dispatch(getRestaurant())
      };

    render() {
        console.log('myProps', this.props)
        return (
            <div>
                <Search/>
                <div className="Create-rest-section1">
                   <div className="Create-rest-section2">
                       {/*{this.props.data.map()}*/}
                   </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    console.log('state', state)
    return {
        data: state.restaurantReducer
    }
}

export default connect(mapStateToProps)(Restaurant);