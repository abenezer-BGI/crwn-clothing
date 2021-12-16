import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100 // Because stripe wants all prices to be in cent
    const publishableKey = 'pk_test_51K7NSvBNUM3bQrcxhp58CeKzgvaUW2EsHU0sfCSr01GGs5xUZM9Uz77lUol0RNCOFGKUZ6CudbMsj43gI3BKLWJO00jo75CUdo'

    const onToken = (token) => {
        console.log(token)
        alert('Payment Successful!')
    }

    return (
        <StripeCheckout
            stripeKey={publishableKey}
            token={onToken}
            label={'Pay Now'}
            name={'CRWN Clothing Ltd.'}
            billingAddress
            shippingAddress
            image={'https://svgshare.com/i/CUz.svg'}
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel={'Pay Now'}
        />
    )
}

export default StripeCheckoutButton;