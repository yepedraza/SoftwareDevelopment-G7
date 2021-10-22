import React, { useState, useEffect } from 'react';
import { FormGroup, FormControl, InputLabel, Input, Button, Typography, RadioGroup, FormLabel, FormControlLabel, Radio } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { editProduct, getProduct } from '../../services/ProductService';
import { useHistory, useParams } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import Container from '../Container/Container';
import Ownheader from '../Header/Ownheader'
import Ownfooter from '../Footer/Ownfooter';
//import Button from '../Buttons/Buttons';

const StyleButton = require('../Buttons/Buttons').default

const initialValue = {
    value: '',
    description: '',
    state: true,
}

const useStyles = makeStyles({
    container: {
        width: '50%',
        margin: '2% 0 0 25%',
        '& > *': {
            marginTop: 15
        }
    }
})

export function EditProduct() {
    const [product, setProduct] = useState(initialValue);
    const { value, description, state } = product;
    const classes = useStyles();
    let history = useHistory();

    const { id } = useParams();

    useEffect(() => {
        loadProductData();
    }, [])

    const loadProductData = async () => {
        let response = await getProduct(id);
        setProduct(response.data.data);
    }

    const onValueChange = (e) => {
        setProduct({ ...product, [e.target.name]: e.target.value });
    }

    const onStateChange = (state) => {
        setProduct({ ...product, "state": state });
    }

    const updateProductData = async () => {
        await editProduct(product);
        history.push('/');
    }

    return (
        <main>
            <Ownheader />
                <div className = "main">
                    <Container titulo="PRODUCT EDITION">
                        <FormGroup className={classes.container}>
                            
                            <FormControl>
                                <InputLabel htmlFor="my-input">Description</InputLabel>
                                <Input onChange={(e) => onValueChange(e)} name="description" value={description} id="my-input" />
                            </FormControl>
                            <FormControl>
                                <InputLabel htmlFor="my-input">Unit Value</InputLabel>
                                <Input onChange={(e) => onValueChange(e)} name="value" value={value} id="my-input" />
                            </FormControl>
                            <FormControl component="fieldset">
                                <FormLabel component="legend">State</FormLabel>
                                <RadioGroup
                                    name='state'
                                    onChange={(e) => onStateChange(e.target.value === "In-Stock")}
                                    aria-label="state"
                                    defaultValue="In-Stock"
                                    value={state ? "In-Stock" : "Out-of-stock"}>
                                    <FormControlLabel value="In-Stock" control={<Radio color="primary"/>} label="In-Stock" />
                                    <FormControlLabel value="Out-of-stock" control={<Radio color="primary" />} label="Out-of-stock" />
                                </RadioGroup>
                            </FormControl>
                            
                            <FormControl>
                                <Button variant="contained" onClick={() => updateProductData()} color="primary">Edit Product</Button>
                            </FormControl>

                        </FormGroup>
                    
                        <div className="Buttons">
                            <NavLink to="/"> 
                                <StyleButton title= "Back"></StyleButton>
                            </NavLink>
                        </div>
                    </Container>
                </div>
            <Ownfooter />
        </main>
    )
}