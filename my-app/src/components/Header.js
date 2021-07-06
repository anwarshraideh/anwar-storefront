import React from 'react';
import Cart from "./simpleCart";
import { connect } from "react-redux";


function Header(props) {
  return (
    <header>
      <h1>OUR STORE</h1>
      {props.MyCart.cart.length}<Cart />
    </header>
  );
};

const mapStateToProps = (state) => ({
  MyCart: state.CartReducer,
});

export default connect(mapStateToProps)(Header);