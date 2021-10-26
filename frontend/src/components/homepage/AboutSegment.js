import React, { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap';
import { Power2, ScrollTrigger } from 'gsap/all'

const AboutSegment = () => {

    const about = useRef()
    gsap.registerPlugin(ScrollTrigger);
    
    useLayoutEffect(() => {
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: about.current,
                // markers: true,
                start: "top center+=150",
                end: "top 10%",
                scrub: 2,
                toggleActions: "restart none reverse none"
            }
        });
        // tl.fromTo(
        //     one.current, {
        //     autoAlpha: 0
        //     // opacity: 0
        // },{
        //     duration: 1,
        //     autoAlpha: 1,
        //     // opacity: 1,
        //     ease: Power2
        // }
        // );
        tl.fromTo(
            about.current.querySelectorAll("div"), {
            autoAlpha: 0,
            y: 100,
            // clipPath: "inset(0, 0, 0, 0)"
        },
            {
                autoAlpha: 1,
                y: 0,
                // clipPath: "inset(0, 0, 100%, 100%)",
                duration: 2,
                stagger: 0.7,
                ease: Power2
                
            }
        );
        
    }, [about])

    return (
        <div className="aboutcontainer" ref={about}>
            <div className="aboutinfo">
            <div className="about orange">About</div>
                <div>Crafted thoughfully</div>
                <div>to bridge the gap between</div>
                <div>comfort and style, Casa</div>
                <div>unveils its first collection,</div>
                <div><strong className="orange">Collection Uno</strong>. Displaying a</div>
                <div>modern scandavanian style,</div>
                <div>Collection Uno fits into</div>
                <div>every home.</div>
            </div>
        </div>
    )
}

export default AboutSegment
