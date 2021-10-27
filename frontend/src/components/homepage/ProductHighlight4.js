import React, { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap';
import { Bounce, Power2, ScrollTrigger } from 'gsap/all'
import { Link } from 'react-router-dom'

const ProductHighlight4 = ({ products }) => {
    
    const four = useRef()
    gsap.registerPlugin(ScrollTrigger);

    useLayoutEffect(() => {
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: four.current,
                start: "top bottom+=150",
                end: "top 50%",
                scrub: 3,
                toggleActions: "restart none reverse reverse",
            }
        });
        tl.fromTo(four.current, {
            xPercent: 100,
            yPercent: 0,
            autoAlpha: 0
            
        }, {
            xPercent: 0,
            yPercent: 0,
            autoAlpha: 1,
            duration: 2,
            ease: Power2
        });
                    
    }, [])

    //animating pic on hover
    const hoverImage = ({ currentTarget }) => {
        gsap.to(currentTarget, {
            x: 20,
            // scale: 1,
            duration: 1,
            ease: Bounce,
        })
    }

    const hoverOut = ({ currentTarget }) => {
        gsap.to(currentTarget, {
            x: 0,
            // scale: -1,
            duration: 1,
            ease: Bounce,
        })
    }

    //animating text senget 
    const hoverName = ({ currentTarget }) => {
        gsap.to(currentTarget, {
            y: 10,
            duration: 1,
            ease: Bounce,
        })
    }

    const hoverOutName = ({ currentTarget }) => {
        gsap.to(currentTarget, {
            y: 0,
            duration: 1,
            ease: Bounce,
        })
    }

    // animate the infobox
    const hoverInfo = ({ currentTarget }) => {
        gsap.to(currentTarget, {
            padding: "2.5rem 10.5rem 2.5rem 2.5rem",
            duration: 0.6,
            ease: Bounce,
        })
    }

    const hoverOutInfo = ({ currentTarget }) => {
        gsap.to(currentTarget, {
            padding: "2rem 10rem 2rem 2rem",
            duration: 1,
            ease: Bounce,
        })
    }

    return (
        <div className="high1container" ref={four}>
            <div className="vertical-center">
                <div><img src={products[3].image} alt={products[3].name} className="highlight" onMouseEnter={hoverImage} onMouseLeave={hoverOut}/> </div>
                <div className="rotatehighlight" onMouseEnter={hoverName} onMouseLeave={hoverOutName}> {products[3].name} </div>

                <div className="highlightinfobox" onMouseEnter={hoverInfo} onMouseLeave={hoverOutInfo}>
                    <div className="producttype">{products[3].type}</div>
                    <div className="name" > {products[3].name} </div>
                    <div className="price" >${products[3].price.toFixed(2)}</div>
                   
                    <Link to={`/product/${products[3]._id}`}><span className="discover" >Find out More <i class="fa fa-arrow-circle-right"></i></span></Link>
       
                </div>
            </div>
        </div>
    )
}

export default ProductHighlight4
