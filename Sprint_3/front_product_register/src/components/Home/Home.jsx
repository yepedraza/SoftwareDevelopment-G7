import React from 'react'
import Button from '../Buttons/Buttons'
import Ownfooter from '../Footer/Ownfooter'
import OwnHeader from '../Header/Ownheader'
import { NavLink } from 'react-router-dom';
import "./Home.css"

export function Home() {
    return (

        <div>
            
            
            <OwnHeader/>
            <div className="Home-page">
                Welcome to the Marketplace
            
                <div>
                    <NavLink to="/Login">
                        <button className = "Button-home-page">Log In</button>
                    </NavLink>
                </div>
            </div>

            <Ownfooter />
        
        </div>

    )
}