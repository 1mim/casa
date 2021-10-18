import React from 'react'
import "./modals.css"

const ErrorMessage = (props) => {
    return (
        <div className={`modal modal-${props.variant || 'info'}`}>
            {props.children}
        </div>
    )
}

export default ErrorMessage
