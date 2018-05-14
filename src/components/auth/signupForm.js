import React, { Component } from 'react';

import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';

class SignupForm extends Component {


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
            <form className="signup-form" onSubmit={handleSubmit}>
                <div className="signup-form__name">
                    <label>Name</label>
                    <Field name="name" type="text" component={this.renderInput}/>
                </div>
                <div className="signup-form__email">
                    <label>Email</label>
                    <Field name="email" type="email" component={this.renderInput}/>
                </div>

                <div className="signup-form__password">
                    <label>Password</label>
                    <Field name="password" type="password" component={this.renderInput}/>
                </div>
                <div className="signup-form__confirm">
                    <label>Confirm Password</label>
                    <Field name="confirm" type="password" component={this.renderInput}/>
                </div>
                <Link to="/">Back</Link>
                <button type="submit">Create Account</button>
            </form>
        )
    }
}

function validate(values) {
    const errors = {};

    if(!values.name) {
        errors.name = "Enter your name";
    }

    if(!values.email) {
        errors.email = "Enter a valid email address";
    }

    if(!values.password) {
        errors.password = "Enter a password";
    }

    if(!values.confirm) {
        errors.confirm = "Confirm your password";
    }

    if(values.password != values.confirm) {
        errors.confirm = "Passwords do not match"
    }

    return errors;
}

SignupForm = reduxForm({
    form: 'signup',
    validate
})(SignupForm);

export default SignupForm;