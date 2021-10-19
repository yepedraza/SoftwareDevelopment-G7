import React from 'react'
import Icons from '../Icons/Icons'
import './Input.css'


const Input = ({nameLabel, value, nameIcon}) => {
    return (
        <div className="input">
            <label className="input-label">{nameLabel}</label>
            <Icons className="input-icon" icon={nameIcon} />
            <input className="input-bar" type = "text/css" placeholder={value}/>
        </div>
        
    )
}

export default Input