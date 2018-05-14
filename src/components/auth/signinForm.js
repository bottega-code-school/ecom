import React, { Component } from 'react';

import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';

class SigninForm extends Component {

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
            <form className="signin-form" onSubmit={handleSubmit}>
                <h1 className="signin-form__login-title">Login</h1>

                <div className="signin-form__email">
                    <label>Email</label>
                    <Field name="email" type="email" component={this.renderInput}/>
                </div>

                <div className="signin-form__password">
                    <label>Password</label>
                    <Field name="password" type="password" component={this.renderInput}/>
                </div>
 
                <div className="signin-form__line"></div>
                <button className="signin-form__login-button" type="submit">Login</button>

                <div className="password-requirements">
                    <div className="password-requirements__title">QuickLinks</div>
                    <Link to="/signin">Not registered? Create account here.</Link>
                    <Link to="/signin">Forgot account email</Link>
                    <Link to="/signin">Forgot Password</Link>
                    <Link to="/">Continue as a Guest</Link>
                </div>
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

SigninForm = reduxForm({
    form: 'signin',
    validate
})(SigninForm);

export default SigninForm;