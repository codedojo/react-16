import React, { Component } from 'react';

import './App.css';
import logo from './logo.svg';

import DateTime from './components/Date';

export default class App extends Component {
    render() {
        return (
            <div className="app">
                <header>
                    <img src={logo} alt="React logo" />
                    <h1>React 16</h1>
                </header>

                <main>
                    <DateTime value={new Date()} format={'DD MMMM YYYY'} />
                </main>

                <footer></footer>
            </div>
        );
    }
}