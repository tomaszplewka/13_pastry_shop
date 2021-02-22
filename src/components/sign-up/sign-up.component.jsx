import React, { useState } from 'react';
import { connect } from 'react-redux';

import FormInput from '../form-input/form-input.component';
import Btn from '../button/button.component';

import { signUpStart } from '../../redux/user/user.actions';

import './sign-up.styles.scss';

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
        <div className="sign-up">
            <h2 className="sign-up-header">sign in</h2>
            {/* <span className="sign-in-subheader">I already have an account</span> */}
            <form onSubmit={handleSubmit} className="sign-up-form">
                <FormInput
                    type="text"
                    id="displayName"
                    name="displayName"
                    value={displayName}
                    required
                    onChange={handleChange}
                    label="displayName"
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
                    placeholder="password"
                />
                <FormInput
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    value={confirmPassword}
                    required
                    onChange={handleChange}
                    label="confirmPassword"
                    placeholder="confirmPassword"
                />
                <Btn type="submit">Sign Up</Btn>
                {/* <Btn type="submit" onClick={ signInGoogle }>Sign In With Google</Btn> */}
            </form>
        </div>
    );
}

const mapDispatchToProps = dispatch => ({
    signUpStart: userCred => dispatch(signUpStart(userCred))
});

export default connect(null, mapDispatchToProps)(SignUp);