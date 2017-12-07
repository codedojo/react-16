import React, { Component, Fragment } from 'react';

import './App.css';
import logo from './logo.svg';

export default class App extends Component {
    render() {
        return (
            <Fragment>
                <header>
                    <img src={logo} alt="React logo" />
                    <h1>React 16</h1>
                </header>

                <main>
                    <dl>
                        {[[1, 'a'], [2, 'b'], [3, 'c']].map(([dd, dt]) =>
                            <Fragment key={dd}>
                                <dd>{dd}</dd>
                                <dt>{dt}</dt>
                            </Fragment>
                        )}
                    </dl>
                </main>

                <footer></footer>
            </Fragment>
        );
    }
}