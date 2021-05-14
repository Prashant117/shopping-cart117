import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";

import Products from "../components/products/Products";
import CartList from "../components/cart/CartList";
import PRODUCTS from "../DATA";
import {addToCartAction, updateCartUnits} from "../redux/actions/cart_actions";

class App extends React.Component {

  render() {
    const {cart, addToCartAction, updateCartUnits} = this.props;
    return (
      <main className="pa3 pa5-ns w-100">
        <CartList cart={cart} updateCartUnits={updateCartUnits} />
        <Products products={PRODUCTS} addToCartAction={addToCartAction} />
      </main>
    );
  }
}


const mapStateToProps = ({cart}) => {
  return {
    cart
  }
}

const mapActionsToProps = (dispatch) => {
  return bindActionCreators({
    addToCartAction,
    updateCartUnits
  }, dispatch)
}

export default connect(mapStateToProps, mapActionsToProps)(App);
