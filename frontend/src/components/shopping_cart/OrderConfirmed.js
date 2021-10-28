import React, { useEffect, useRef } from 'react'
import CheckoutSteps from './CheckoutSteps'
// import { Link } from 'react-router-dom'
import { gsap, Power2 } from 'gsap';
import Footer from '../Footer';


const OrderConfirmed = (props) => {

    const tl = useRef()
    const image = useRef()
    const thanks = useRef()

    useEffect(() => {
        tl.current = gsap.timeline()
        .from(thanks.current, {
            opacity: 0,
            x: 200,
            ease: Power2.easeOut,
            duration:1,
        })
        .from(image.current, {
            opacity: 0,
            // y: 100,
            duration: 0.4,
            ease: Power2.easeIn,
            // delay:1,
        })
    }, [])

    return (
        <div className="">
            <div className="contain-row-checkout"><CheckoutSteps step2 step3 step4 /></div>
            <div className="flex-container">

                <div className="items-in-success">
                    <img src="https://i.ibb.co/sbTwLcb/Modern-dark-green-home-interior-with-brown-couch-and-pampas-in-wicker-basket-3d-render.jpg" alt="" ref={image}style={{ maxWidth: "40%" }}/>
                    
                    <div className="thanks-container" ref={thanks}>
                    <div className="order-confirmed"> Order is confirmed. </div>
            <div className="thanks">Thank you.</div>
                    
                        <div className="p-thanks">You will receive a confirmation email from us shortly.<br /> We will let you know once your order is shipped. </div>
                       
                        {/* <Link to="/"><div className="center-pls"> <button className="browse" > Browse Our Collection </button></div></Link> */}
                    </div>
                    

                </div>
                <footer><Footer /></footer>            </div>
</div>
    )
}

export default OrderConfirmed
