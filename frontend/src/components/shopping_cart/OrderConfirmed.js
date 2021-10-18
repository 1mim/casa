import React from 'react'
import CheckoutSteps from './CheckoutSteps'
import { Link } from 'react-router-dom'


const OrderConfirmed = (props) => {
    return (
        <div className="">
            <CheckoutSteps step2 step3 step4 />
            <div className="flex-container">

                <div className="items-in-success">
                <img src="https://i.ibb.co/gZHQtDF/thanks-pic2.png" alt="" style={{ maxWidth: "40%" }}/>
                    
                    <div className="thanks-container">
                    <div className="order-confirmed"> Order is confirmed. </div>
            <div className="thanks">Thank you.</div>
                    
                        <div className="p-thanks">You will receive a confirmation email from us shortly.<br /> We will let you know once your order is shipped. </div>
                        <button className="browse"> <Link to ="/">Browse Our Collection</Link> </button>
                    </div>
                    

                </div>
        </div></div>
    )
}

export default OrderConfirmed
