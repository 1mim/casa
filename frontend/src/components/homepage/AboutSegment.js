import React, { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap';
import { Power2, ScrollTrigger } from 'gsap/all'

const AboutSegment = () => {

    const one = useRef()
    gsap.registerPlugin(ScrollTrigger);
    
    useLayoutEffect(() => {
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: one.current,
                markers: true,
                start: "top center+=150",
                end: "top 20%",
                scrub: 1,
                toggleActions: "restart none none none"
            }
        });
        tl.fromTo(
            one.current, {
            autoAlpha: 0
            // opacity: 0
        },
            {
                duration: 1,
                autoAlpha: 1,
                // opacity: 1,
                ease: Power2
            }
        );
        
    }, [one])

    return (
        <div className="aboutcontainer" ref={one}>
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
