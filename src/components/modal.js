import React, { Component } from 'react';

class Modal extends Component {
    render() {
        return (
            <a onClick={() => this.props.onTapOutside()} className="modal">
                <a onClick={() => this.props.dontDismiss()}className="modal-box">
                    <label className="modal-box__save-address">Save Address</label>
                    <label className="modal-box__message">Would you like to save this address on file for future purchases with GummyCode?</label>
                    <div className="modal-box__buttons">
                        <button className="modal-box__save-address">Save Address</button>
                        <button className="modal-box__dont-save">Don't Save</button>
                    </div>
                </a>
            </a>
        )
    }
}

export default Modal;