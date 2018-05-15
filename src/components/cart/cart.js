import React, { Component } from 'react';

import CartProduct from './cartProduct';

class Cart extends Component {
    render() {
        return (
            <div className="cart">

                <div className="cart__toggle">
                    <a className="fa">&#xf00d;</a>
                </div>

                <div className="cart__body">
                    <div className="cart__body__title">
                        Cart (4)
                    </div>
                    <div className="cart__body__products">
                        <div className="cart__body__products__wrapper">
                            <CartProduct/>
                            <CartProduct/>
                            <CartProduct/>
                            <CartProduct/>
                            <CartProduct/>
                        </div>
                    </div>
                    <div className="cart__body__footer">
                        <div className="cart__body__footer__checkout">
                            <a>Checkout</a>
                        </div>
                        <div className="cart__body__footer__subtotal">Subtotal</div>
                        <div className="cart__body__footer__total">$7.96</div>
                    </div>
                </div>

            </div>
        )
    }
}

export default Cart;