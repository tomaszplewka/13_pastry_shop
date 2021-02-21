import React from 'react';
import { connect } from 'react-redux';

import FormInput from '../form-input/form-input.component';
import Btn from '../button/button.component';

import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions';

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
        const { emailSignInStart } = this.props;
        const { email, password } = this.state;

        emailSignInStart(email, password);
    };

    handleChange = e => {
        const { name, value } = e.target;

        this.setState({ [name]: value });
    };

    render() {
        const { googleSignInStart } = this.props;
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
                    <Btn type="button" onClick={ googleSignInStart }>Sign In With Google</Btn>
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

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password }))
});

export default connect(null, mapDispatchToProps)(SignIn);