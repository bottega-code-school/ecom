import React, { Component } from 'react';

import SigninForm from './signinForm';

import Header from '../header';
import Navbar from '../navbar';


class Signin extends Component {

    handleFormSubmit({email, password}) {
        console.log(email, password);

        this.props.history.push('/user-info');
    }

    render() {
        const actions = [
            {
                title: "Shop", path: "/"
            }
        ]
        return (
            <div className="signin">
                <Header actions={actions}/>
                <Navbar/>
                <SigninForm onSubmit={({email, password}) => this.handleFormSubmit({email, password})}/>
            </div>
        )
    }
}



export default Signin;