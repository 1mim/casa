import React, { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap';
import { Power2 } from 'gsap/all'

const LandingPage = ({ products }) => {

    const tl = useRef()
    const animate = useRef()
    
    useLayoutEffect(() => {
        tl.current = gsap.timeline()
        .fromTo(animate.current.querySelectorAll("div"), {
                autoAlpha: 0,
                y: 100,
                // scale: 0.7
                // clipPath: "inset(0, 0, 0, 0)"
            },
                {
                    autoAlpha: 1,
                    y: 0,
                    // scale: 1,
                    // clipPath: "inset(0, 0, 100%, 100%)",
                    duration: 2,
                    stagger: 0.7,
                    ease: Power2   
                }
            );          
        
    }, [animate])

    return (
        <div className="landingcontainer" style={{backgroundImage:`url(${products[1].image})`}}>
            <div className="floating-text" ref={animate}>
                <div> Welcome to Casa. </div>
                <div> Experience right at home </div>
                <div>comfort in exquisite</div>
                <div> fashion.</div>
            </div>
        </div>
    )
}

export default LandingPage
