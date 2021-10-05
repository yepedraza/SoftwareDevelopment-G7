import React from 'react'
import './Buttons.css'

const Buttons = ({title, disabled, onClick}) => {
    return (
        <button className="Button" disabled={disabled} onClick={() =>onClick()}>
            {title}
        </button>
    )
}

export default Buttons
