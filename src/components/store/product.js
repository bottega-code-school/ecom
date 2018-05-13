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
                {/* <div className="product__back">

                </div> */}
            </div>
        )
    }
}

export default Product;