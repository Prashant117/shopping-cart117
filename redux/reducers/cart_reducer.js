

/** 
 * action = {
 *  type: "STRING",
 *  payload: "DATA"
 * }
 * 
*/
import {ADD_TO_CART, UPDATE_CART_UNITS} from "../actions/cart_actions";

const INITIAL_STATE = [
  {
    id: 4,
    name: "Banana",
    description: "I need those carbs",
    img: "https://tachyons.io/img/avatar_1.jpg",
    price: 100,
    units: 2
  }
];

export default function cartReducer(state = INITIAL_STATE, action = {}) {

  switch(action.type) {
    case ADD_TO_CART: {
      const product = action.payload;
      const cart = state;

      const existingProductIndex = findProductIndex(cart, product.id);

      const updatedCart = existingProductIndex >= 0 
          ? updateProductUnits(cart, product)
          : [...cart, product];

      return updatedCart;
    }

    case UPDATE_CART_UNITS: {
      const payload = action.payload;
      const cart = state;

      const existingProductIndex = findProductIndex(cart, payload.id);

      if (existingProductIndex >= 0) {
        let product = cart[existingProductIndex];
        product.units = payload.units;

        cart[existingProductIndex] = product;
      }

      return [...cart]

    }
  }

  return state;
}


const findProductIndex = (cart, productID) => {
  return cart.findIndex(p => p.id === productID);
};

const  updateProductUnits = (cart, product) => {
  const productIndex = findProductIndex(cart, product.id);

  const updatedCart = [...cart];
  const existingProduct = updatedCart[productIndex];

  const updatedUnitsProduct = {
    ...existingProduct,
    units: existingProduct.units + product.units
  };

  updatedCart[productIndex] = updatedUnitsProduct;

  return updatedCart;
};