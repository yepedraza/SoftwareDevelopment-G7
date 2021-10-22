import React from 'react'
import Button from '../Buttons/Buttons'
import Ownfooter from '../Footer/Ownfooter'
import Ownheader from '../Header/Ownheader'
import { NavLink } from 'react-router-dom';
//import { faBarcode, faAlignJustify, faDollarSign} from '@fortawesome/free-solid-svg-icons'

const Main = () => {

    /* Acá va la lógica
    const makeAlert = () => {
        alert("Product saved")
    }
    */
    
    return (
        <main>
            <Ownheader />
            <div className = "Home-page">
                PRODUCT MASTER

                <div className="Buttons">
                    <NavLink to="/">
                        <Button title="Main Page"/>
                    </NavLink>
                    <NavLink to="/list">
                        <Button title="Product List"/>
                    </NavLink>
                    <NavLink to="/add">
                        <Button title="Create Product"/>
                    </NavLink>
                    <NavLink to="/edit/:id">
                        <Button title="Edit Product"/>
                    </NavLink>
                    
                </div>      
            </div>
            <Ownfooter />
        </main>
    )
}

export default Main