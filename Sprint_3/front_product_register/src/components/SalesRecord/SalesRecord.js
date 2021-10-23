import './SalesRecord.css';
import React, { useState, useEffect } from 'react'
import Ownfooter from '../Footer/Ownfooter'
import Ownheader from '../Header/Ownheader'
import { NavLink } from 'react-router-dom';
import Actualdate from '../ActualDate/Actualdate.js';
import { Table, TableHead, TableCell, TableRow, TableBody, Button} from '@material-ui/core';
import { getSales, deleteSale } from '../../services/SalesService';
import { makeStyles } from '@material-ui/styles';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import Container from '../Container/Container';
import { addSale } from '../../services/SalesService';

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

const initialValue = {
    clientID: '',
    clientName: '',
    sellerID: '',
    sellerName: '',
    prouctID: '',
    amount: '',
    date: getCurrentDate()
}

function SalesRecord() {
  const classes = useStyles();

  const [sales, setSales] = useState([])

  useEffect(() => {
    getAllSales();
  }, [])

  const getAllSales = async () => {
      let response = await getSales();
      console.log(response);
      setSales(response.data.data);
  }

  const deleteSaleData = async (id) => {
      let callbackUser = window.confirm('¿Esta seguro de eliminar del historial de ventas?');
      if (callbackUser) {
          await deleteSale(id);
          getAllSales();
      }
  }
  
  const [sale, setSale] = useState(initialValue);
  const { clientID, clientName, sellerID, sellerName, productID, amount, date} = sale;
  let history = useHistory();

  const onValueChange = (e) => {
      setSale({ ...sale, [e.target.name]: e.target.value });
  }

  const addSaleData = async () => {
      await addSale(sale);
      history.push('/');
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
                <input className = "InfoNumberForm" name="clientID" onChange={(e) => onValueChange(e)} value={clientID} type = "text" placeholder = "Client ID"></input>
                <input className = "InfoTextForm" name="clientName" onChange={(e) => onValueChange(e)} value={clientName} type = "text" placeholder = "Name"></input>                
            </div>
            <div className = "InformationContainer">
                <input className = "InfoNumberForm" name="sellerID" onChange={(e) => onValueChange(e)} value={sellerID} type = "text" placeholder = "Seller ID"></input>
                <input className = "InfoTextForm" name="sellerName" onChange={(e) => onValueChange(e)} value={sellerName} type = "text" placeholder = "Seller"></input>                
            </div>
            <form class = "InformationContainer">
                <input class = "InfoNumberForm" name="productID" onChange={(e) => onValueChange(e)} value={productID} type = "text" placeholder = "Product Id" id = "productid"></input>
                <input class = "InfoNumberForm" name="amount" onChange={(e) => onValueChange(e)} value={amount} type = "text" placeholder = "Product Amount" id = "productquantity"></input>
                <input class = "Entrance" type = "button" value = "Sell" onClick={(e) => addSaleData()}/>          
            </form>
        </div>
        <div className = "BotomContainer">
            <Table className={classes.table}>
                <TableHead>
                    <TableRow className={classes.thead}>
                        <TableCell>Sell ID</TableCell>
                        <TableCell>Client ID</TableCell>
                        <TableCell>Client Name</TableCell>
                        <TableCell>Seller ID</TableCell>
                        <TableCell>Seller Name</TableCell>
                        <TableCell>Prouct ID</TableCell>
                        <TableCell>Amount</TableCell>
                        <TableCell>Date</TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        sales.map(sale => (
                            <TableRow className={classes.row} key={sale._id}>
                                <TableCell>{sale._id}</TableCell>
                                <TableCell>{sale.clientID}</TableCell>
                                <TableCell>{sale.clientName}</TableCell>
                                <TableCell>{sale.sellerID}</TableCell>
                                <TableCell>{sale.sellerName}</TableCell>
                                <TableCell>{sale.prouctID}</TableCell>
                                <TableCell>{sale.amount}</TableCell>
                                <TableCell>{sale.date}</TableCell>
                                <TableCell>
                                    <Button component={Link} to={`/edit/${sale._id}`} color="primary">Edit</Button>
                                    <Button color="secondary" onClick={() => deleteSaleData(sale._id)} >Remove</Button>
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
