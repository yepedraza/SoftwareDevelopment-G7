import React from 'react'
import './Container.css'

const Container = ({titulo, children}) => {
    return (
        <div className='container'>
            <h1 className="container-title">{titulo}</h1>
            {children}
        </div>
    )
}

export default Container