import React, { Component } from 'react';

import { Details } from './details';

class PurchaseHistory extends Component {

    render() {
        return (
            <div className="purchase-history">
                <h1 className="purchase-history__title">Purchase History</h1>
                <div className="purchase-history__products">

                </div>
                <div className="details">
                    {Details('Order Number', 'A004847493', 'order-number')}
                    {Details('Order Date', '01/03/18', 'order-date')}
                    {Details('Shipping Address', 'J-Hidgey - 1234 WEST STATE', 'shipping-address')}
                    {Details('Total', '$8.02', 'total')}
                    {Details('Credit Card', '-0000', 'credit-card')}
                    <div className="details__link details__track-shipment">
                        Track Shipment
                    </div>
                    <div className="details__link details__print-receipt">
                        Print Receipt
                    </div>
                </div>
            </div>
        )
    }
}

export default PurchaseHistory;