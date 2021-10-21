import React from 'react'
import Button from '../Buttons/Buttons'
import Ownfooter from '../Footer/Ownfooter'
import { NavLink } from 'react-router-dom';
import "./Home.css"

export function Home() {
    return (

        <div>
            
            

            <div className="Home-page">
                Welcome to the Marketplace
            
            

                <div>
                    <NavLink to="/Menu">
                        <button className = "Button-home-page">Log In</button>
                    </NavLink>
                </div>
            {/* <div className="Buttons">
                    <NavLink to="/Menu">
                        <Button title="Product Management"/>
                    </NavLink>
            </div> */}
            </div>

            <Ownfooter />
        
        </div>
        


    )
}