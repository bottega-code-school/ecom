import React, { Component } from 'react';

class Cart extends Component {
    render() {
        return (
            <div className="cart">
                <div className="cart__toggle">
                    <a class="fa">&#xf00d;</a>
                </div>
                <div className="cart__body">
                    <div className="cart__title">
                        Cart (4)
                    </div>
                    <div className="cart__products">
                        <div className="products">
                            This is where a bunch of products will go
                        </div>
                    </div>
                    <div className="cart__footer">
                        <div className="cart__footer-checkout">
                            <a>Checkout</a>
                        </div>
                        <div className="cart__footer-sub">Subtotal</div>
                        <div className="cart__footer-total">$7.96</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Cart;