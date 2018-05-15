import React, { Component } from 'react';

import Header from '../header';
import Navbar from '../navbar';

import ShippingAddressForm from './ShippingAddressForm';

class ShippingAddress extends Component {
    render() {
        return (
            <div className="shipping-address">
                <Header actions={[]}/>
                <Navbar/>
                <ShippingAddressForm/>
            </div>
        )
    }
}

export default ShippingAddress;