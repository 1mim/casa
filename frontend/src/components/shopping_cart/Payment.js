import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { savePaymentMethod } from '../redux/actions/cartActions';
import CheckoutSteps from './CheckoutSteps'

const Payment = (props) => {

    const cart = useSelector(state => state.cart);
    const { shippingAddress } = cart;

    if (!shippingAddress.address) {
        props.history.push('/shipping');
    }

    const dispatch = useDispatch()
    const [paymentMethod, setPaymentMethod] = useState('PayPal');

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(savePaymentMethod(paymentMethod));
        props.history.push('/placeorder');
    }

    return (
        <div>
            <CheckoutSteps step1 step2 step3 />
            <form className="form" onSubmit={handleSubmit}>
                <div>
                    <h1>Payment Method</h1>
                    <div>
                        <input type="radio" id="paypal" value="PayPal" name="paymentMethod" required checked onChange={(e)=> setPaymentMethod(e.target.value)} ></input>
                    <label htmlFor="paypal">PayPal</label>    
                    </div>
                    <div>
                        <input type="radio" id="mastercard" value="Mastercard" name="paymentMethod" required onChange={(e)=> setPaymentMethod(e.target.value)} ></input>
                    <label htmlFor="paypal">Mastercard</label>    
                    </div>
                    <button className="primary" type="submit">Continue</button>
</div>
            </form>
        </div>
    )
}

export default Payment
