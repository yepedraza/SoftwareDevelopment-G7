import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const Icons = ({icon}) => {
    return (
        <span style={{fontSize:"20px", color:"#1a497a", marginRight:"10px"}}>
        <FontAwesomeIcon icon={icon}/>
        </span>
    )
}

export default Icons