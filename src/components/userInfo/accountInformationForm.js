import React, { Component } from 'react';

import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';

class AccountInformationForm extends Component {

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
            <form className="account-information-form" onSubmit={handleSubmit}>
                <h1 className="account-information-form__register">Register</h1>
                <div className="account-information-form__name">
                    <label>Name</label>
                    <Field name="name" type="text" component={this.renderInput}/>
                </div>
            </form>
        )
    }
}

function validate(values) {
    const errors = []
    return errors;
}

AccountInformationForm = reduxForm({
    form: "account-information",
    validate
})(AccountInformationForm);

export default AccountInformationForm;


