import React, { useState } from 'react'
import Container from '../Container/Container'
import Button from '../Buttons/Buttons'
import Input from '../Inputs/Input'
import Selector from '../Selector/Selector'

import { addProduct } from '../../services/ProductService';
import { useHistory } from 'react-router-dom';

import { faBarcode, faAlignJustify, faDollarSign} from '@fortawesome/free-solid-svg-icons'

const initialValue = {
    value: '',
    description: '',
    state: true,
}

const Main = () => {
    const [product, setProduct] = useState(initialValue);
    const { value, description, state } = product;

    //const classes = useStyles();
    let history = useHistory();

    const onValueChange = (e) => {
        setProduct({ ...product, [e.target.name]: e.target.value });
    }

    const onStateChange = (state) => {
        setProduct({ ...product, "state": state });
    }

    const addProductData = async () => {
        await addProduct(product);
        history.push('/');
    }

//const Main = () => {

    /* Acá va la lógica
    const makeAlert = () => {
        alert("Product saved")
    }
    */
    return (
        <main>
            <div className = "main">
                <Container titulo="PRODUCT REGISTRATION">
                <section class = "main-input">
                    {//<Input nameLabel="Product ID:" value ="e.g., 123" nameIcon={faBarcode}  />
                    }
                    <Input nameLabel="Description:" value = {description} nameIcon={faAlignJustify} onChange={(e) => onValueChange(e)}/>
                    <Input nameLabel="Unit Value:" value = {value} nameIcon={faDollarSign} onChange={(e) => onValueChange(e)}/>
                    <Selector nameLabel="Product state:" />
                </section>

                <div className="Buttons">
                    <Button title="Save" disabled={false} variant="contained" onClick={(e) => addProductData()}/>
                    {//<Button title="Clear" disabled={true} onClick={makeAlert}/>
                     //<Button title="Product List" disabled={true} onClick={makeAlert}/>
                    }
                    
                </div>
                
                </Container>
                
            </div>
        </main>
    )
}

export default Main