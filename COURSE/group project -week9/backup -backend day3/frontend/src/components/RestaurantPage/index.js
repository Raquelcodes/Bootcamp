import React, {Component} from 'react';
import Header from '../Header/index';
import clock from '../../multimedia/icon/clock.svg';
import money from '../../multimedia/icon/money.svg'
import './index.css';

class RestaurantPage extends Component {
    render() {
        return (
            <div>
                <Header/>
                <div className="RestaurantTitle">
                    <div className="RestaurantName">
                        <p className="Text1">Hans im Glück</p>
                        <p className="Text2">Burgergrill - Bar</p>
                    </div>
                </div>
                <div className="ViewSection">
                    <div className="CommentView">
                        <input type="text" className="FilterInput" placeholder="Filter list..."/>
                        <button className="FilterButton">FILTER</button>
                    </div>

                    <div className="CreateComment">
                        <div className="OpeningTime">
                            <img src={clock}/>
                            <p className="Timetext">Monday-Friday 9:00 am - 8:00 pm</p>
                        </div>
                        <div className="OpeningTime">
                            <img src={money}/>
                            <p className="Timetext">Price-Level: $$$</p>
                        </div>
                        <button className="CommentButton">Write A Comment</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default RestaurantPage;