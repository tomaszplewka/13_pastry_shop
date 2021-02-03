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
                <h2>Sign In</h2>
                {/* <span></span> */}
                <form onSubmit={this.handleSubmit} className="sign-in-form">
                    <FormInput
                        type="email"
                        id="email"
                        name="email"
                        value={this.state.email} required
                        handleChange={this.onChange}
                        label="email"
                    />
                    <FormInput
                        type="password"
                        id="password"
                        name="password"
                        value={this.state.password} required
                        handleChange={this.onChange}
                        label="password"
                    />
                    <Btn type="submit">Sign In</Btn>
                </form>
            </div>
        );
    }
}

export default SignIn;