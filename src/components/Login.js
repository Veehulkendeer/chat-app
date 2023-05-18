import React from 'react';
import firebase from '../firebase.js';
import { Link } from 'react-router-dom';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            error: null,
        };
    }

    handleChange = e => {
        this.setState({[e.target.name]: e.target.value});
    }

    handleSubmit = e => {
        e.preventDefault();
        const {email, password} = this.state;
        firebase.auth().signInWithEmailAndPassword(email, password).then(() => {
                this.props.history.push('/');
            })
            .catch(error => {
                this.setState({error});
            });
    }
    render () {
        const {email, username, password, error} = this.state;
        return (
            <div className="auth-container">
                <h1>Login</h1>
                <p>Login to acess your account</p>
                {error && <p className="error-message">{error.message}</p>}
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="email">Email address</label>
                    <input type="text" name="email" id="email" value={email} onChange={this.handleChange}></input>
                    <label htmlFor="password">Input your password</label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        value={password}
                        onChange={this.handleChange}
                        >
                    </input>
                    <button className="submit">Login</button>
                    <p>Don't have an account? <Link className="login-btn" to="/register">Register here</Link></p>
                </form>
            </div>
        );
    }
}

export default Login;