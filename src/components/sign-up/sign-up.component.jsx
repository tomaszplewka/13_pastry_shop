import React from 'react';
import { connect } from 'react-redux';

import FormInput from '../form-input/form-input.component';
import Btn from '../button/button.component';

import { signUpStart } from '../../redux/user/user.actions';

import './sign-up.styles.scss';

class SignUp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async e => {
        e.preventDefault();

        const { signUpStart } = this.props;
        const { displayName, email, password, confirmPassword } = this.state;
        if (password !== confirmPassword) {
            // password don't match - show error msg
            return;
        }
        signUpStart({ displayName, email, password });
    };

    handleChange = e => {
        const { name, value } = e.target;

        this.setState({ [name]: value });
    };

    render() {
        // const { displayName, email, password, confirmPassword } = this.state;

        return (
            <div className="sign-up">
                <h2 className="sign-up-header">sign in</h2>
                {/* <span className="sign-in-subheader">I already have an account</span> */}
                <form onSubmit={this.handleSubmit} className="sign-up-form">
                    <FormInput
                        type="text"
                        id="displayName"
                        name="displayName"
                        value={this.state.displayName}
                        required
                        onChange={this.handleChange}
                        label="displayName"
                        placeholder="Username"
                    />
                    <FormInput
                        type="email"
                        id="email"
                        name="email"
                        value={this.state.email}
                        required
                        onChange={this.handleChange}
                        label="email"
                        placeholder="Email"
                    />
                    <FormInput
                        type="password"
                        id="password"
                        name="password"
                        value={this.state.password}
                        required
                        onChange={this.handleChange}
                        label="password"
                        placeholder="password"
                    />
                    <FormInput
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        value={this.state.confirmPassword}
                        required
                        onChange={this.handleChange}
                        label="confirmPassword"
                        placeholder="confirmPassword"
                    />
                    <Btn type="submit">Sign Up</Btn>
                    {/* <Btn type="submit" onClick={ signInGoogle }>Sign In With Google</Btn> */}
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    signUpStart: userCred => dispatch(signUpStart(userCred))
});

export default connect(null, mapDispatchToProps)(SignUp);