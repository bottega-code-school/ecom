import React, { Component } from 'react';

import { Link } from 'react-router-dom';

class Modal extends Component {
    render() {
        return (
            <a onClick={() => this.props.onTapOutside()} className="modal">
                <div className="modal-box">
                    <label className="modal-box__save-address">Save Address</label>
                    <label className="modal-box__message">Would you like to save this address on file for future purchases with GummyCode?</label>
                    <div className="modal-box__buttons">
                        <Link to="/payment-information"><button className="modal-box__save-address">Save Address</button></Link>
                        <Link to="/payment-information"><button className="modal-box__dont-save">Don't Save</button></Link>
                    </div>
                </div>
            </a>
        )
    }
}

export default Modal;