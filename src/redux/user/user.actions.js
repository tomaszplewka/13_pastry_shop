import UserActionTypes from './user.types';

export const googleSignInStart = () => ({
    type: UserActionTypes.GOOGLE_SIGN_IN_START
});
export const signInSuccess = user => ({
    type: UserActionTypes.SIGN_IN_SUCCESS,
    payload: user
});
export const signInFailure = error => ({
    type: UserActionTypes.SIGN_IN_FAILURE,
    payload: error
});
export const emailSignInStart = emailAndPass => ({
    type: UserActionTypes.EMAIL_SIGN_IN_START,
    payload: emailAndPass
});

export const checkUserSession = () => ({
    type: UserActionTypes.CHECK_USER_SESSION
});

export const signOutStart = () => ({
    type: UserActionTypes.SIGN_OUT_START
});
export const signOutSuccess = () => ({
    type: UserActionTypes.SIGN_OUT_SUCCESS
});
export const signOutFailure = error => ({
    type: UserActionTypes.SIGN_OUT_FAILURE,
    payload: error   
});

export const signUpStart = userCred => ({
    type: UserActionTypes.SIGN_UP_START,
    payload: userCred
});

export const signUpSuccess = ({ user, data }) => ({
    type: UserActionTypes.SIGN_UP_SUCCESS,
    payload: { user, data }
});

export const signUpFailure = error => ({
    type: UserActionTypes.SIGN_OUT_FAILURE,
    payload: error
});