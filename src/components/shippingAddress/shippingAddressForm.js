import React, { Component } from 'react';

import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';

class ShippingAddressForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            showModal: false
        }
    }

    componentDidUpdate() {
        console.log(this.state);
    }

    renderInput(field) {
        return (
            <div>
                <input {...field.input} type={field.type}/>
                <span className="form-error">
                {
                    field.meta.touched && field.meta.error && <span> {field.meta.error} </span>
                }    
                </span> 
            </div>
        )
    }

    render() {
        const { handleSubmit } = this.props;

        return (
            <form className="shipping-address-form" onSubmit={handleSubmit}>
                <h1 className="shipping-address-form__title">Shipping Address</h1>
                <div className="shipping-address-form__name">
                    <label>Name</label>
                    <Field name="name" type="text" component={this.renderInput}/>
                </div>
                <div className="shipping-address-form__email">
                    <label>Email</label>
                    <Field name="email" type="email" component={this.renderInput}/>
                </div>
                <div className="shipping-address-form__city">
                    <label>City</label>
                    <Field name="city" type="city" component={this.renderInput}/>
                </div>

                <div className="shipping-address-form__state">
                    <label>State</label>
                    <Field name="state" type="state" component={this.renderInput}/>
                </div>
                <div className="shipping-address-form__zipcode">
                    <label>Zipcode</label>
                    <Field name="zipcode" type="zipcode" component={this.renderInput}/>
                </div>
                <div className="shipping-address-form__line"></div>

                <Link className="shipping-address-form__back" to="/order-review">Back</Link>
                <a className="shipping-address-form__use-this-address" onClick={() => this.setState({ showModal: true })}>Use this Address</a>

                <div className="shipping-address-form__order-summary order-summary">
                    <div className="order-summary__products">
                        <label>4 stickers</label>
                        <label>$7.96</label>
                    </div>
                    <div className="order-summary__taxes-shipping">
                        <label>Taxes & Shipping</label>
                        <label>$0.16</label>
                    </div>
                    <div className="order-summary__total">
                        <label>Total</label>
                        <label>$8.02</label>
                    </div>
                </div>
            </form>
        )
    }
}

function validate(values) {
    const errors = {};
    return errors;
}

ShippingAddressForm = reduxForm({
    form: 'shippingaddress',
    validate
})(ShippingAddressForm);

export default ShippingAddressForm;