import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price})=>
{
    const priceForStripe = price*100;
    const publishableKey = 'pk_test_51GqIACL2LNkkrcgeiYMjMgeSnHxZb1dxxVyqDfQvDEl8Mk1IdNOPepUK0J3J7kfoucwWWV1gHugIweMQHJWWGhSg00Pv5PqmwG';
    
    const onToken = token =>
    {
        console.log(token);
        alert('Payment Successfull');
    }
 
    return (

        <StripeCheckout
        label='Pay Now'
        name='CRWN Clothing Ltd.'
        billingAddresskk
        shippingAddress
        image='https://svgshare.com/i/CUz.svg'
        description={`Your total is $${price}`}
        amount = {priceForStripe}
        panelLabel = 'Pay Now'
        token={onToken}
        stripeKey={publishableKey}
        />
    );
}

export  default StripeCheckoutButton;