import React from 'react';

import './Modal.css';

export default class Modal extends React.Component {
    render() {
        return (
            <div className="modal">
                <button className="modal__close-button">Закрыть</button>
                {this.props.children}
            </div>
        );
    }
}