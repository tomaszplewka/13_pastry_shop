import React from 'react';

import FormInput from '../form-input/form-input.component';
import Btn from '../button/button.component';

import { auth, signInGoogle } from '../../firebase/firebase.utilities';

import './sign-in.styles.scss';

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        };
    }

    handleSubmit = async e => {
        e.preventDefault();

        const { email, password } = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({email: '', password: ''});
        } catch (error) {
            console.log('Error siging user in. ', error.message);
        }
    };

    handleChange = e => {
        const { name, value } = e.target;

        this.setState({ [name]: value });
    };

    render() {
        return (
            <div className="sign-in">
                <h2 className="sign-in-header">sign in</h2>
                {/* <span className="sign-in-subheader">I already have an account</span> */}
                <form onSubmit={this.handleSubmit} className="sign-in-form">
                    <FormInput
                        type="email"
                        id="email"
                        name="email"
                        value={this.state.email} required
                        onChange={this.handleChange}
                        label="email"
                        placeholder="Email"
                    />
                    <FormInput
                        type="password"
                        id="password"
                        name="password"
                        value={this.state.password} required
                        onChange={this.handleChange}
                        label="password"
                        placeholder="Password"
                    />
                    <Btn type="submit">Sign In</Btn>
                    <Btn type="button" onClick={ signInGoogle }>Sign In With Google</Btn>
                </form>
                <div className="hexagon-wrapper">
                    <div className="hexagon">
                        <i className="fab fa-facebook"></i>
                    </div>
                </div>
            </div>
        );
    }
}

export default SignIn;