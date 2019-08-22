import { createStore, combineReducers } from "redux";
//import { addToCart } from "../Store/actions";
import { ADD_TO_CART } from "./types";

const initialShirtsList = {
  "1": {
    id: "1",
    content:
      "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1550688557-uniqlo-1550688547.jpg?crop=1xw:1xh;center,top&resize=*:2151",
    price: 20
  },
  "2": {
    id: "2",
    content:
      "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1550687854-bonbos-1550687846.jpg?crop=1xw:1xh;center,top&resize=*:2151",
    price: 20
  },
  "3": {
    id: "3",
    content:
      "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1550688143-everlane-1550688134.jpg?crop=1xw:1xh;center,top&resize=*:2151",
    price: 20
  }
};

const initialCartList = {};

const shirtsReducer = (shirts = initialShirtsList, action) => {
  return shirts;
};

const shoppingCartReducer = (cart = initialCartList, action) => {
  console.log("in cart reducer", action);
  switch (action.type) {
    case ADD_TO_CART:
      //making a copy of the item in the list to add it to cart
      let newShirt;
      const newShirtInCart = {
        ...initialShirtsList,
        [action.data]: newShirt
      };
      const newCart = { ...cart };
      newCart[newShirtInCart.id] = newShirtInCart;
      console.log("newCart", newCart);
      return newCart;
    default:
      return cart;
  }
};

const reducer = combineReducers({
  shirts: shirtsReducer,
  cart: shoppingCartReducer
});
const store = createStore(reducer);

export default store;
