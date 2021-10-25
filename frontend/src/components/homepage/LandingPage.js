import React from 'react'

const LandingPage = ({ products }) => {
    return (
        <div className="landingcontainer" style={{backgroundImage:`url(${products[1].image})`}}>
            <div className="floating-text">
                <div> Welcome to Casa. </div>
                <div> Experience right at home </div>
                <div>comfort in exquisite</div>
                <div> fashion.</div>
            </div>
        </div>
    )
}

export default LandingPage
