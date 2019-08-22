//to render the cart with the added tshirts
import React from "react";
import { connect } from "react-redux";
//import "../CartList";

const Cart = props => {
  return (
    <div className="cart">
      <h5>You have ordered:</h5>
      <ul>{props.cart}</ul>
    </div>
  );
};

const mapStateToProps = state => {
  //convert to array -see Shirtlist
  return {
    cart: state.cart
  };
};

export default connect(mapStateToProps)(Cart);
