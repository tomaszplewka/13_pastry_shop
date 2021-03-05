import React, { useState } from 'react';
import { connect } from 'react-redux';

import FormInput from '../form-input/form-input.component';
import Btn from '../button/button.component';

import { signUpStart } from '../../redux/user/user.actions';

import { SignUpContainer, SignUpForm, SignUpTitle } from './sing-up.styles';

const SignUp = ({ signUpStart }) => {
    const [ userCred, setUserCred ] = useState({ email: '', password: '', displayName: '', confirmPassword: ''});
    const { displayName, email, password, confirmPassword } = userCred;

    const handleSubmit = async e => {
        e.preventDefault();
        if (password !== confirmPassword) {
            // password don't match - show error msg
            return;
        }
        signUpStart({ displayName, email, password });
    };

    const handleChange = e => {
        const { name, value } = e.target;
        setUserCred({ ...userCred, [name]: value });
    };

    return (
        <SignUpContainer>
            <SignUpTitle>sign up</SignUpTitle>
            <SignUpForm onSubmit={handleSubmit}>
                <FormInput
                    type="text"
                    id="Username"
                    name="Username"
                    value={displayName}
                    required
                    onChange={handleChange}
                    label="Username"
                    placeholder="Username"
                />
                <FormInput
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    required
                    onChange={handleChange}
                    label="email"
                    placeholder="Email"
                />
                <FormInput
                    type="password"
                    id="password"
                    name="password"
                    value={password}
                    required
                    onChange={handleChange}
                    label="password"
                    placeholder="Password"
                />
                <FormInput
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    value={confirmPassword}
                    required
                    onChange={handleChange}
                    label="confirm Password"
                    placeholder="Confirm Password"
                />
                <Btn type="submit" fullWidth>Sign Up</Btn>
                {/* <Btn type="submit" onClick={ signInGoogle }>Sign In With Google</Btn> */}
            </SignUpForm>
        </SignUpContainer>
    );
}

const mapDispatchToProps = dispatch => ({
    signUpStart: userCred => dispatch(signUpStart(userCred))
});

export default connect(null, mapDispatchToProps)(SignUp);