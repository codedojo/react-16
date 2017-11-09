import React, { Component } from 'react';

export default class LoginForm extends Component {
    state = {
        user: {
            email: '',
            password: ''
        }
    };

    update = ({ target: { id, value } }) => {
        this.setState(state => ({
            user: {
                ...state.user,
                [id]: value
            }
        }));
    };

    reset = () => this.setState({ user: null });

    submit = () => alert(`${this.state.user.email} ${this.state.user.password}`);

    render() {
        const { email, password } = this.state.user;

        return (
            <form>
                <input
                    id="email"
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={this.update}
                />

                <input
                    id="password"
                    type="password"
                    placeholder="Пароль"
                    value={password}
                    onChange={this.update}
                />

                <button type="button" onClick={this.submit}>Войти</button>
                <button type="button" onClick={this.reset}>Сбросить</button>
            </form>
        );
    }
}