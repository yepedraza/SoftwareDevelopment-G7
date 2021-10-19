import React, { useState, useEffect } from 'react'
import { Table, TableHead, TableCell, TableRow, TableBody, Button, makeStyles } from '@material-ui/core';
//import { getProducts, deleteProduct } from '../services/ProductService';
import { Link } from 'react-router-dom';


const useStyles = makeStyles({
    table: {
        width: '90%',
        margin: '50px 0 0 50px'
    },
    thead: {
        '& > *': {
            fontSize: 20,
            background: '#c5c5c5',
            color: '#FFFFFF'
        }
    },
    row: {
        '& > *': {
            fontSize: 18
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
        <Table className={classes.table}>
            <TableHead>
                <TableRow className={classes.thead}>
                    <TableCell>Id</TableCell>
                    <TableCell>Descripción</TableCell>
                    <TableCell>Valor</TableCell>
                    <TableCell>Estado</TableCell>
                    <TableCell></TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    products.map(product => (
                        <TableRow className={classes.row} key={product._id}>
                            <TableCell>{product._id}</TableCell>
                            <TableCell>{product.descripcion}</TableCell>
                            <TableCell>{product.valor}</TableCell>
                            <TableCell>{product.estado ? "Disponible" : "Agotado"}</TableCell>
                            <TableCell>
                                <Button component={Link} to={`/edit/${product._id}`} color="primary">Editar</Button>
                                <Button color="secondary" onClick={() => deleteProductData(product._id)} >Eliminar</Button>
                            </TableCell>
                        </TableRow>
                    ))
                }
            </TableBody>
        </Table>
    )
}
