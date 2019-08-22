import React from "react";
import { connect } from "react-redux";
import "./index.css";
import { addToCart } from "../../Store/actions";
//import { AddShirtToCart } from "../AddShirtToCart";

const ShirtList = props => {
  const handleClick = id => {
    props.addToCart(id);
  };

  return (
    <ul>
      {props.shirts.map(shirt => {
        return (
          <div key={shirt.id} className="shirt-block">
            <img src={shirt.content} className="shirt" />
            <p>Price: ${shirt.price}</p>
            <div
              className="button-add"
              onClick={() => {
                handleClick(shirt.id);
              }}
            >
              Add to Cart
            </div>
          </div>
        );
      })}
    </ul>
  );
};

//to pass state
const mapStateToProps = state => {
  const shirts = Object.values(state.shirts);
  console.log("in mapState toProps", state.shirts);
  //   .map(shirt => shirt.content);
  return { shirts: shirts };
};

const mapDispatchToProps = dispatch => {
  return {
    addToCart: id => {
      dispatch(addToCart(id));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShirtList);
