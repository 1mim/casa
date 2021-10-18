import React from 'react'

const CheckoutSteps = (props) => {
    return (
        <div className="row-checkout">
            {/* <div className={props.step1 ? 'active' : ''}>Login </div> <div>/</div> */}
            <div className={props.step2 ? 'active' : ''}>Delivery</div> <div>/</div>
            <div className={props.step3 ? 'active' : ''}>Payment</div> <div>/</div>
            <div className={props.step4 ? 'active' : ''}>Order Confirmed</div>
            
        </div>
    )
}

export default CheckoutSteps
