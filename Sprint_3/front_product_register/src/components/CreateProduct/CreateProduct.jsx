import React, { useState } from 'react';
import { FormGroup, FormControl, RadioGroup, FormLabel, Button, FormControlLabel, Radio, Input, InputLabel, InputAdornment  } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { addProduct } from '../../services/ProductService';
import { useHistory } from 'react-router-dom';
import Container from '../Container/Container';
import Ownfooter from '../Footer/Ownfooter'
import Ownheader from '../Header/Ownheader'
//import Input from '../Inputs/Input';
import { NavLink } from 'react-router-dom';
//faBarcode
//import { faAlignJustify, faDollarSign} from '@fortawesome/free-solid-svg-icons'

const StyleButton = require('../Buttons/Buttons').default

const initialValue = {
    value: '',
    description: '',
    state: true
}

const useStyles = makeStyles({
    container: {
        width: '50%',
        margin: '3% 0 0 25%',
        '& > *': {
            marginTop: 15
        }
    }
})


export function CreateProduct() {
    const [product, setProduct] = useState(initialValue);
    const { value, description, state } = product;
    
    const classes = useStyles();
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

    return (
        <main>
            <Ownheader />
                <div className = "Main">
                    <Container titulo="PRODUCT REGISTRATION">
                        <section className = "main-input">
                            {/* <Input nameLabel="Description:" value = {description} nameIcon={faAlignJustify} onChange={(e) => onValueChange(e)}/>
                            <Input nameLabel="Unit Value:" value = {value} nameIcon={faDollarSign} onChange={(e) => onValueChange(e)}/> 
                            startAdornment={
                                    <InputAdornment position="start">
                                        
                                    </InputAdornment>
                            }*/}
                            
                        </section>

                        <FormGroup className={classes.container}>
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
                                    <FormControlLabel value="In-Stock" control={<Radio color="primary" />} label="In-Stock" />
                                    <FormControlLabel value="Out-of-stock" control={<Radio color="primary" />} label="Out-of-stock" />
                                </RadioGroup>
                            </FormControl> 
                            
                            <FormControl>
                                <Button variant="contained" onClick={(e) => addProductData()} color="primary">Save Product</Button>
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
