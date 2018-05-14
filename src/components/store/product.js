import React, { Component } from 'react';

class Product extends Component {
    render() {
        const product = this.props.product;

        return (
            <div className="product">
                <div className="product__front">
                    <img src={product.imageUrl}/>
                    <label>{product.title}</label>
                </div>
                <div className="product__back back">
                    <h6 className="back__title">JavaScript in the Browser</h6>
                    <p className="back__description">Just like you should not use company time to work on your own business, it's highly unethical to take or use other resources such as notebooks, technology, and tools of your craft that belong to your employer.</p>
                    <div className="back__price">$1.99</div>
                    <div className="back__amount-box">1</div>
                    <div className="back__plus"><a class="fa">&#xf067;</a></div>
                    <div className="back__minus"><a class="fa">&#xf068;</a></div>
                    <a className="back__add-to-cart">Add to Cart</a>
                </div>
            </div>
        )
    }
}

export default Product;