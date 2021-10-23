import React, { useState, useEffect } from 'react';
import { FormGroup, FormControl, RadioGroup, FormLabel, Button, FormControlLabel, Radio, Input, InputLabel } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles'
import { addProduct } from '../../services/ProductService';
import { useHistory } from 'react-router-dom';
import Container from '../Container/Container';
import Ownfooter from '../Footer/Ownfooter';
import { Ownheader } from '../Header/Ownheader';
import { verifyToken } from '../../services/AuthService';
import { getCurrentUser } from '../../services/AuthService';
import { NavLink } from 'react-router-dom';
//import '../Main/Main.css';
//faBarcode, InputAdornment
//import { faAlignJustify, faDollarSign} from '@fortawesome/free-solid-svg-icons'

const StyleButton = require('../Buttons/Buttons').default

const initialValue = {
    value: '',
    description: '',
    state: true
}

const useStyles = makeStyles({
    containerStyle: {
        
        width: '50%',
        margin: '3% 0 0 25%',
        '& > *': {
            marginTop: 15
        }
    }
})


export function CreateProduct() {
    const [user, setUser] = useState(null)

    useEffect(() => {
        verifyToken();
        setUser(getCurrentUser());
    }, [])

    const [product, setProduct] = useState(initialValue);
    const { value, description, state } = product;
    
    const classes = useStyles();
    let history = useHistory();

    const onValueChange = (e) => {
        setProduct({ ...product, [e.target.name]: e.target.value });
    }

    const onStateChange = (state) => {
        setProduct({ ...product, "state": state });
        console.log(state);
    }

    const addProductData = async () => {
        await addProduct(product);
        history.push('/prodList');
    }

    return (
        <main>
            <Ownheader />
                
                    
                    <Container titulo="PRODUCT REGISTRATION">
                        <FormGroup className={classes.containerStyle}>
                            <FormControl>
                                <InputLabel htmlFor="my-input">Description</InputLabel>
                                <Input onChange={(e) => onValueChange(e)} name="description" value={description} id="my-input" />
                            </FormControl>

                            <FormControl>
                                <InputLabel htmlFor="my-input">Unit Value</InputLabel>
                                <Input onChange={(e) => onValueChange(e)} name="value" value={value} id="my-input" />
                            </FormControl>
                            
                            {/*  
                            <Selector nameLabel="Product State:" onChange={(e) => onStateChange(e.target.value === "In-Stock")} 
                            defaultValue="In-Stock" value={estado ? "In-Stock" : "Out-of-stock"}> </Selector>
                            
                            <div className="Buttons">
                            <Button title="Save Product" variant="contained" onClick={(e) => addProductData()}/>
                            <NavLink to="/"> 
                                <Button title="Back" />
                            </NavLink>
                        </div>
                            
                            */}
                            
                            <FormControl component="fieldset">
                                <FormLabel component="legend">Product State</FormLabel>
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

                            {user && (
                            <FormControl>
                                <Button variant="contained" onClick={(e) => addProductData()} color="primary">Save Product</Button>
                            </FormControl>
                            )}
                        </FormGroup>
                        <div className="Buttons">
                                <NavLink to="/menu"> 
                                    <StyleButton title= "Back"></StyleButton>
                                </NavLink>
                        </div>
                    </Container>
                
            <Ownfooter />
        </main>
    )
}
