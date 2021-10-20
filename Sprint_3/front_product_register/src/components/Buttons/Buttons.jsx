import React from 'react'
import './Buttons.css'

const Buttons = ({title, onClick}) => {
    return (
        <button className="Button" >
            {title}
        </button>
    )
}

export default Buttons