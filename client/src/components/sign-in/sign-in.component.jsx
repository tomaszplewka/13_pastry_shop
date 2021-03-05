import React, { useState } from 'react';
import { connect } from 'react-redux';

import FormInput from '../form-input/form-input.component';
import Btn from '../button/button.component';

import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions';

import { SignInContainer, SignInForm, SignInTitle } from './sign-in.styles';

const SignIn = ({ emailSignInStart, googleSignInStart }) => {
    const [ userCred, setUserCred ] = useState({ email: '', password: '' });
    const { email, password } = userCred;
    
    const handleSubmit = async e => {
        e.preventDefault();
        emailSignInStart(email, password);
    };

    const handleChange = e => {
        const { name, value } = e.target;
        setUserCred({ ...userCred, [name]: value });
    };

    return (
        <SignInContainer>
            <SignInTitle>sign in</SignInTitle>
            <SignInForm onSubmit={handleSubmit}>
                <FormInput
                    type="email"
                    id="email"
                    name="email"
                    value={email} required
                    onChange={handleChange}
                    label="email"
                    placeholder="Email"
                />
                <FormInput
                    type="password"
                    id="password"
                    name="password"
                    value={password} required
                    onChange={handleChange}
                    label="password"
                    placeholder="Password"
                />
                <Btn type="submit" fullWidth>Sign In</Btn>
                <Btn type="button" fullWidth onClick={ googleSignInStart }>Sign In With Google</Btn>
            </SignInForm>
        </SignInContainer>
    );
}

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password }))
});

export default connect(null, mapDispatchToProps)(SignIn);