import { Stack, Typography } from '@mui/material';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useContext, useEffect, useState } from 'react';
import { bookingContext } from '../../App';
import userContext from '../../context/userContext';
import { MainButton } from '../../Shared/Buttons';
import { CircularProgress } from '@mui/material';
import parkOwnerContext from '../../context/parkOwnerContext';
import { useNavigate } from 'react-router-dom';

const CheckoutForm = () => {
    const [clientSecret, setClientSecret] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
    const [processing, setProcessing] = useState(false)
    const [bookingDetails] = useContext(bookingContext);
    const {ownerInfo, setOwnerInfo} = useContext(parkOwnerContext)
    const { profileInfo } = useContext(userContext)
    const price = bookingDetails.price;
    const navigate = useNavigate()

    useEffect(() => {
        if (price) {
            fetch(`${process.env.REACT_APP_API_URL}/create-payment-intent`, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({ price: price })
            })
                .then(res => res.json())
                .then(data => setClientSecret(data.clientSecret))
        }
    }, [price])

    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }

        // Get a reference to a mounted CardElement. Elements knows how
        // to find your CardElement because there can only ever be one of
        // each type of element.
        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        // Use your card Element with other Stripe.js APIs
        setProcessing(true)
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log('[error]', error);
        } else {
            console.log('[PaymentMethod]', paymentMethod);
        }


        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: profileInfo.name,
                        email: profileInfo.email
                    },
                },
            },
        );
        if (intentError) {
            setErrorMessage(intentError.message)

        }
        else {
            setErrorMessage('')
            console.log(paymentIntent)
            setProcessing(false)
            fetch(`${process.env.REACT_APP_API_URL}/bookings`,{
                method: 'POST',
                headers:{
                    'content-type': 'application/json'
                },
                body: JSON.stringify({
                    ...bookingDetails,
                    driverName: profileInfo.name,
                    driverEmail: profileInfo.email,
                    driverPhone: profileInfo.phone,

                    ownerEmail: ownerInfo.email,
                    ownerName: ownerInfo.name,
                    ownerPhone: ownerInfo.phone,
                    ownerAddress: ownerInfo.address,

                    paidAmmount: paymentIntent.amount/100,
                    secretKey: paymentIntent.client_secret,
                    currency: paymentIntent.currency,
                    id: paymentIntent.id,
                    bookingTime: new Date().toLocaleString()
                })
            })
            .then(res=>res.json())
            .then(data=>{
                if(data.insertedId) navigate(`bookingDetails/${data.insertedId}`)
                
            })

        }

    };
    console.log(ownerInfo)
    console.log(profileInfo)
    return (
        <>
            <form onSubmit={handleSubmit} style={{ border: '1px solid #eee', padding: '16px 8px' }}>
                <Typography sx={{ mb: '32px', color: '#333' }}>Enter all the necessary card information: </Typography>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <Stack sx={{ width: '100%', mt: '64px' }} direction='column' justifyContent='center' alignItems='center'>
                    {
                        processing
                            ? <CircularProgress />
                            : <MainButton sx={{ display: 'block' }} type="submit" disabled={!stripe}>
                                Pay ${price}
                            </MainButton>

                    }
                    <Typography sx={{ color: 'red', mt: '16px' }}>{errorMessage}</Typography>
                </Stack>
            </form>

        </>
    );
};

export default CheckoutForm;