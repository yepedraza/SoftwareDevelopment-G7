import './SalesRecord.css';
import React, { useState, useEffect } from 'react'
import Ownfooter from '../Footer/Ownfooter'
import Ownheader from '../Header/Ownheader'
import { NavLink } from 'react-router-dom';
import Actualdate from '../ActualDate/Actualdate.js';
import { Table, TableHead, TableCell, TableRow, TableBody, Button} from '@material-ui/core';
import { getProducts, deleteProduct } from '../../services/ProductService';
import { makeStyles } from '@material-ui/styles';
import { Link } from 'react-router-dom';
import Container from '../Container/Container';


function getCurrentDate(separator='/'){

  let newDate = new Date()
  let date = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();
  
  return `${date}${separator}${month<10?`0${month}`:`${month}`}${separator}${year}`
}
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

function SalesRecord() {
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
    <div className="App">
      <Ownheader/>
      <div className = "SalesRecordContainer">
        <div className = "SuperiorContainer">
            <div className = "DateContainer">
                <Actualdate/>
            </div>
            <div className = "InformationContainer">
                <input className = "InfoNumberForm" type = "text" placeholder = "Client ID"></input>
                <input className = "InfoTextForm" type = "text" placeholder = "Nombre"></input>                
            </div>
            <div className = "InformationContainer">
                <input className = "InfoNumberForm" type = "text" placeholder = "Seller ID"></input>
                <input className = "InfoTextForm" type = "text" placeholder = "Vendedor"></input>                
            </div>
            <form class = "InformationContainer">
                <input class = "InfoNumberForm" type = "text" placeholder = "Id del producto" id = "productid"></input>
                <input class = "InfoNumberForm" type = "text" placeholder = "Cantidad de productos" id = "productquantity"></input>
                <input class = "Entrance" type = "button" value = "Ingresar producto" onclick = "obtenerDatos()"/>          
            </form>
        </div>
        <div className = "BotomContainer">
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
        </div>
      </div>
      <Ownfooter/>
    </div>
  );
}

export default SalesRecord;
