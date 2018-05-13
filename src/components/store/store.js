import React, { Component } from 'react';

import Product from './product';

class Store extends Component {

  constructor(props) {
    super(props)

    this.state = {
      products: [
        {
          imageUrl: "http://via.placeholder.com/220x220",
          title: "JS in the browser"
        },
        {
          imageUrl: "http://via.placeholder.com/220x220",
          title:  "Graph Database"
        },
        {
          imageUrl: "http://via.placeholder.com/220x220",
          title: "UI Design"
        },
        {
          imageUrl: "http://via.placeholder.com/220x220",
          title: "UML Design"
        },
        {
          imageUrl: "http://via.placeholder.com/220x220",
          title: "Python Development"
        }
      ]
    }
  }

  renderProducts() {
    return this.state.products.map((product, index) => {
      return (
        <Product key={index} product={product}/>
      )
    })
  }

  render() {
    return (
        <ul className="store">
          {this.renderProducts()}
        </ul>
    );
  }
}

export default Store;
