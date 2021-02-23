import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

import './stripe-checkout.styles.scss';

const StripeCheckoutBtn = ({ price }) => {
    const stripePrice = price * 100;
    const pKey = 'pk_test_51ILvIAB0mEu02lJRpvbTxiCgQljNlXU5Pzv1nznO1BMcgmBLJpB8YkcWWVlG6FI7g2uEG2JXXXW65uMFyFxCOSdV00sCtRsYqu';

    const onToken = token => {
        axios({
            url: 'payment',
            method: 'post',
            data: {
                amount: stripePrice,
                token
            }
        }).then(response => {
            alert('Payment was successful.');
        }).catch(error => {
            console.log('Payment error: ', JSON.parse(error));
            alert('Payment was unsuccessful. Please use the provided credit card details.');
        })
    };

    return (
        <StripeCheckout
            label="Pay Now"
            name="Pastry Shop Ltd."
            billingAddress
            shippingAddress
            description={`Your total price is $${price}`}
            amount={stripePrice}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={pKey}
        />
    );
};

export default StripeCheckoutBtn;