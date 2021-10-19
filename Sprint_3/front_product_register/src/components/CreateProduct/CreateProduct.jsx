import React, { useState } from 'react';
import { FormGroup, FormControl, makeStyles, RadioGroup, FormLabel, FormControlLabel, Radio } from '@material-ui/core';
import { addProduct } from '../../services/ProductService';
import { useHistory } from 'react-router-dom';
import Container from '../Container/Container';
import Button from '../Buttons/Buttons';
import Input from '../Inputs/Input';
import { NavLink } from 'react-router-dom';
//import Selector from '../Selector/Selector'
//faBarcode
import { faAlignJustify, faDollarSign} from '@fortawesome/free-solid-svg-icons'

const initialValue = {
    value: '',
    description: '',
    state: true
}

const useStyles = makeStyles({
    container: {
        width: '50%',
        margin: '5% 0 0 25%',
        '& > *': {
            marginTop: 20
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
        setProduct({ ...product, "estado": state });
    }

    const addProductData = async () => {
        await addProduct(product);
        history.push('/');
    }

    return (
        <main>
            <div className = "main">
                <Container titulo="PRODUCT REGISTRATION">
                    <section className = "main-input">
                        <Input nameLabel="Description:" value = {description} nameIcon={faAlignJustify} onChange={(e) => onValueChange(e)}/>
                        <Input nameLabel="Unit Value:" value = {value} nameIcon={faDollarSign} onChange={(e) => Number(onValueChange(e))}/>
                        
                    </section>

                    <FormGroup className={classes.container}>
                        
                        {/* {<FormControl>
                            <InputLabel htmlFor="my-input">Description</InputLabel>
                            <Input onChange={(e) => onValueChange(e)} name="descripcion" value={descripcion} id="my-input" nameIcon={faAlignJustify} />
                        </FormControl> 

                        <FormControl>
                            <InputLabel htmlFor="my-input">Unit Value</InputLabel>
                            <Input onChange={(e) => onValueChange(e)} name="valor" value={valor} id="my-input" />
                        </FormControl>

                        <Selector nameLabel="Product State:" onChange={(e) => onStateChange(e.target.value === "In-Stock")} 
                        defaultValue="In-Stock" value={estado ? "In-Stock" : "Out-of-stock"}> </Selector>
                        
                        <FormControl>
                            <Button variant="contained" onClick={(e) => addProductData()} color="primary">Add Product</Button>
                        </FormControl>
                        */}
                        <FormControl component="fieldset">
                            <FormLabel component="legend">Product State</FormLabel>
                            <RadioGroup
                                name='estado'
                                onChange={(e) => onStateChange(e.target.value === "In-Stock")}
                                aria-label="estado"
                                defaultValue="In-Stock"
                                value={state ? "In-Stock" : "Out-of-stock"}>
                                <FormControlLabel value="In-Stock" control={<Radio />} label="In-Stock" />
                                <FormControlLabel value="Out-of-stock" control={<Radio />} label="Out-of-stock" />
                            </RadioGroup>
                        </FormControl> 
                    </FormGroup>

                    <div className="Buttons">
                        <Button title="Save Product" variant="contained" onClick={(e) => addProductData()}/>
                        <NavLink to="/"> 
                            <Button title="Back" />
                        </NavLink>
                    </div>

                </Container>
        </div>
        </main>
    )
}
