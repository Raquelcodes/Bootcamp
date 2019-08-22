import React, {Component} from 'react';
import {connect} from "react-redux";

//components & actions
import Header from '../Header/index';
import {profileAction} from '../../store/action/profileAction'

//css & media
import './index.css'
import star from '../../multimedia/star.svg'
import comment from '../../multimedia/comment.svg'
import edit from '../../multimedia/edit.svg'
import restaurant from '../../multimedia/restaurant.svg'

class Profile extends Component {
    componentDidMount() {
        console.log("will dispatch profileAction")
        this.props.dispatch(profileAction());

    }

    render() {
        return (
            <div className='Profile'>
                <Header/>
                <div className="background-pic"></div>
                <div className='content'>
                    <div className='left'>
                        <img className='pic'/>
                        <div className='usernavi'>
                            <div className='naviitem'>USER's profile</div>
                            <div className='naviitem'>
                                <img src={star}/>
                                <p>Reviews</p>
                            </div>
                            <div className='naviitem'>
                                <img src={comment}/>
                                <p>Comments</p>
                            </div>
                            <div className='naviitem'>
                                <img src={restaurant}/>
                                <p>Restaurants</p>
                            </div>
                            <div className='naviitem'>
                                <img src={edit}/>
                                <p>Edit</p>
                            </div>
                        </div>
                    </div>
                    <div className='middle'>
                        <div className='address-box'>
                            <div> 6 reviews</div>
                            <div> 210 comments</div>

                        </div>
                        <div className='comment-box'></div>
                        <div className='comment'> Comments</div>
                        <div className='comment'> Comments</div>
                        <div className='comment'> Comments</div>

                    </div>
                    <div className='right'>
                        <div className='comment'> ABOUT USER</div>
                        <div className='comment'> Location</div>
                        <div className='comment'> Comments</div>
                        <div className='comment'> Luna Member Since</div>
                        <div className='comment'> Comments</div>
                        <div className='comment'> Things I love</div>
                        <div className='comment'> Comments</div>
                        <div className='comment'> Description</div>
                        <div className='comment'> Comments</div>

                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {

    console.log("in map-state-to-props")
    console.log("state", state)
    const filteredPosts = state.feedReducer.feed && state.feedReducer.feed
        .filter(post => {
            if (post["content"] !== "") {
                return post
            }
        });

    const filteredUsers = state.userReducer.users && state.userReducer.users
        .filter(user => {
            if (user["first_name"] !== "") {
                return user
            }
        });
    return {
        feed: filteredPosts,
        users: filteredUsers,
        likes: state.likeFeedReducer.likes
    }
};

export default connect()(Profile);