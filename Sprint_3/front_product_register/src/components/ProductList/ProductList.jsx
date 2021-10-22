import React, { useState, useEffect } from 'react'
import { Table, TableHead, TableCell, TableRow, TableBody, Button} from '@material-ui/core';
import { getProducts, deleteProduct } from '../../services/ProductService';
import { makeStyles } from '@material-ui/styles';
import { Link } from 'react-router-dom';
import Container from '../Container/Container';
import Ownfooter from '../Footer/Ownfooter'
import Ownheader from '../Header/Ownheader'
import { NavLink } from 'react-router-dom';

const StyleButton = require('../Buttons/Buttons').default

const useStyles = makeStyles({
    table: {
        width: '95%',
        margin: '1px 0 0 30px'
    },
    thead: {
        '& > *': {
            width: 'auto',
            fontSize: 17,
            background: '#2bb4c8',
            color: '#FFFFFF',
            family: 'Nunito,Helvetica,Arial,sans-serif'
        }
    },
    row: {
        '& > *': {
            fontSize: 15,
            color: '#1a497a',
            family: 'Nunito,Helvetica,Arial,sans-serif'
        }
    }
})

export function ProductList() {
    const classes = useStyles();

    const [products, setProducts] = useState([])

    useEffect(() => {
        getAllProducts();
    }, [])

    const getAllProducts = async () => {
        let response = await getProducts();
        console.log(response);
        setProducts(response.data.data);
    }

    const deleteProductData = async (id) => {
        let callbackUser = window.confirm('Esta seguro de elimar el prudcto');
        if (callbackUser) {
            await deleteProduct(id);
            getAllProducts();
        }
    }

    return (
        <main>
            <Ownheader />
                <div className = "main">
                    <Container titulo="PRODUCT LIST">
                    <section className = "main-input">
                        <Table className={classes.table}>
                            <TableHead>
                                <TableRow className={classes.thead}>
                                    <TableCell>Id Product</TableCell>
                                    <TableCell>Description</TableCell>
                                    <TableCell>Value</TableCell>
                                    <TableCell>State</TableCell>
                                    <TableCell></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    products.map(product => (
                                        <TableRow className={classes.row} key={product._id}>
                                            <TableCell>{product._id}</TableCell>
                                            <TableCell>{product.description}</TableCell>
                                            <TableCell>{product.value}</TableCell>
                                            <TableCell>{product.state ? "In-Stock" : "Out-of-stock"}</TableCell>
                                            <TableCell>
                                                <Button component={Link} to={`/edit/${product._id}`} color="primary">Edit</Button>
                                                <Button color="secondary" onClick={() => deleteProductData(product._id)} >Remove</Button>
                                            </TableCell>
                                        </TableRow>
                                    ))
                                }
                            </TableBody>
                            
                        </Table>
                    </section>
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
