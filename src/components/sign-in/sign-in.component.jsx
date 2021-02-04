import React from 'react';

import FormInput from '../form-input/form-input.component';
import Btn from '../button/button.component';

import './sign-in.styles.scss';

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        };
    }

    handleSubmit = e => {
        e.preventDefault();

        this.setState({email: '', password: ''});
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
                        handleChange={this.onChange}
                        label="email"
                        placeholder="Email"
                    />
                    <FormInput
                        type="password"
                        id="password"
                        name="password"
                        value={this.state.password} required
                        handleChange={this.onChange}
                        label="password"
                        placeholder="Password"
                    />
                    <Btn type="submit">Sign In</Btn>
                </form>
                <div class="hexagon-wrapper">
                    <div class="hexagon">
                        <i class="fab fa-facebook"></i>
                    </div>
                </div>
            </div>
        );
    }
}

export default SignIn;