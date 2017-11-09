import React, { Component } from 'react';

import './App.css';
import logo from './logo.svg';

import Modal from './components/Modal';

export default class App extends Component {
    state = {
        isModalOpen: false
    };

    toggleModal = () => {
        this.setState(state => ({ isModalOpen: !state.isModalOpen }));
    };

    render() {
        return (
            <div className="app">
                <header>
                    <img src={logo} alt="React logo" />
                    <h1>React 16</h1>
                </header>

                <main>
                    <button onClick={this.toggleModal}>Открыть</button>

                    {this.state.isModalOpen &&
                        <Modal onClose={this.toggleModal}>
                            <h1>Modal</h1>
                        </Modal>
                    }
                </main>
            </div>
        );
    }
}