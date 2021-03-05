import React from 'react';

import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';
import ShapeDividerTop from '../../components/shape-divider-top/shape-divider-top.components';
import ShapeDividerBottom from '../../components/shape-divider-bottom/shape-divider-bottom.components';

import { AuthContainer } from './auth.styles.jsx';

const Auth = () => (
    <AuthContainer>
        <ShapeDividerTop color="light"/>
        <SignIn/>
        <SignUp/>
        <ShapeDividerBottom/>
    </AuthContainer>
);

export default Auth;