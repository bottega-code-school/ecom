import React, { Component } from 'react';

import SignupForm from './signupForm';

class Signup extends Component {


    handleFormSubmit({name, email, password}) {
        console.log('ay this is working fam.', name, email, password);
    }

    render() {
        return (
            <div className="signup">
                <SignupForm onSubmit={this.handleFormSubmit}/>
            </div>
        )
    }
}

export default Signup;