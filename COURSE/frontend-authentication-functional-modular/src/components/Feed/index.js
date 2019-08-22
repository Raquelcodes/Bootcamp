import React, { Component } from "react";
import { getFeed } from "../../store/actions/feedActions";
import { connect } from "react-redux";
import { addPostToFeed } from "../../store/actions/addPostToFeedAction";
import "./index.css";
import { likePost } from '../../store/actions/likePostAction';
import { dislikePost } from "../../store/actions/dislikePostAction";


class Feed extends Component {
  state = {
    content: "",
    like: false
  }; 
  componentDidMount() {
    this.props.dispatch(getFeed());
  }

  //to write in the input box
  handleNewPost = e => {
    const content = e.currentTarget.value;
    // sets the state with the input
    this.setState({ content });
  };

  //button action dispatch
  handleAddPost = () => {
    this.props.dispatch(addPostToFeed(this.state));
    this.setState({ content: "" });
  };

    

  //button action dispatch
  handleLikePost = (id) => {
    //console.log("feedindex id",id)
      this.props.dispatch(likePost(id))
      this.setState({ like: !this.state.like });
   
  };
  handleDislikePost = (id) => {
    //console.log("feedindex id",id)
      this.props.dispatch(dislikePost(id))
      this.setState({ like: !this.state.like });
   
  };


  render() {
    // console.log("state new post", this.state.newPost);
    return (
      <>
        <h3>Welcome to Motion {this.props.username}! </h3>
        <p>You can write a post below or check out your feed</p>
        <div>
          <input
            type="text"
            placeholder="Create a Post"
            value={this.state.newPost}
            onChange={this.handleNewPost}
          />
        </div>
        <p class=" btn-large" onClick={this.handleAddPost}>Post</p>
        <div>
          {this.props.posts
            ? this.props.posts.map(post => {
                return (
                  <div className="post">
               <div class="col s12 m7">
    <div class="card horizontal"> 
      <div >
        <img className="profile-picture" src={require("/Users/raquel/Desktop/PROPULSION_codeBootcamp/frontend-authentication-functional-modular/src/assets/alien_default.png")}/>
      </div>
      <div >
        <div >
        <p className="username">{post.user.username}</p> <br/>
          <p>{post.content}</p>
        </div>
        <div className="post-footer">
        <div  className="like-button-container" >
          <img className="like-button" src={require('/Users/raquel/Desktop/PROPULSION_codeBootcamp/frontend-authentication-functional-modular/src/assets/pixelheart.jpg')} onClick={()=>this.state.like===false ? this.handleLikePost(post.id):this.handleDislikePost(post.id) } /> 
          <p className="like-count"> {post.like_count}</p>
          </div>
          <div className="share-container">
            <img className="share-icon" src={require("/Users/raquel/Desktop/PROPULSION_codeBootcamp/frontend-authentication-functional-modular/src/assets/share_icon.png")}></img>
          <p className="share-label">Share</p>
          </div>
          </div>
        
      </div>
    </div>
  </div>
                    {/* <p>Posted: {post.created}</p>
                    <p>{post.user.username}</p>
                    <p>{post.content}</p>
                    <p>Likes: {post.like_count}</p>
                    <button  onClick={()=>this.handleLikePost(post.id)} >Like</button> */}
                  </div>
                );
              })
            : "loading ... "}
        </div>
      </>
    );
  }
}
const mapStateToProps = state => {
  //console.log("in mapsprops feed", state.feedReducer.posts);
  
  return {
    posts: state.feedReducer.posts,
  };
};

export default connect(mapStateToProps)(Feed);
