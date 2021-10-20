import React from 'react'
import Container from '../Container/Container'
import Button from '../Buttons/Buttons'
import { NavLink } from 'react-router-dom';
//import Input from '../Inputs/Input'


//import { faBarcode, faAlignJustify, faDollarSign} from '@fortawesome/free-solid-svg-icons'

const Main = () => {

    /* Acá va la lógica
    const makeAlert = () => {
        alert("Product saved")
    }
    */
    
    return (
        <main>
            <div className = "main">
                <Container titulo="PRODUCT MANAGEMENT">
                {/* <section class = "main-input">
                    {//<Input nameLabel="Product ID:" value ="e.g., 123" nameIcon={faBarcode}  />
                    }
                    {/* <Input nameLabel="Description:" value = {description} nameIcon={faAlignJustify} onChange={(e) => onValueChange(e)}/>
                    <Input nameLabel="Unit Value:" value = {value} nameIcon={faDollarSign} onChange={(e) => onValueChange(e)}/>
                    <Selector nameLabel="Product state:" /> 
                </section> */}

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
                    <NavLink to="/edit">
                        <Button title="Edit Product"/>
                    </NavLink>
                    
                </div>
                
                </Container>
                
            </div>
        </main>
    )
}

export default Main