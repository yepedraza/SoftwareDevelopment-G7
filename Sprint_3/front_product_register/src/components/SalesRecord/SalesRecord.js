import './SalesRecord.css';
import Ownfooter from '../Footer/Ownfooter'
import Ownheader from '../Header/Ownheader'
import { NavLink } from 'react-router-dom';
import Actualdate from '../ActualDate/Actualdate.js';


function getCurrentDate(separator='/'){

  let newDate = new Date()
  let date = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();
  
  return `${date}${separator}${month<10?`0${month}`:`${month}`}${separator}${year}`
}


var data = [
    {saleid: 1, productname: 'Gob', productid: '2', unitaryprice: '$50.000', date: getCurrentDate(), sale: '2', subtotal: 'npi'},
    {saleid: 1, productname: 'Gob', productid: '2', unitaryprice: '$50.000', date: getCurrentDate(), sale: '2', subtotal: 'npi'},
    {saleid: 1, productname: 'Gob', productid: '2', unitaryprice: '$50.000', date: getCurrentDate(), sale: '2', subtotal: 'npi'},
];
  

function SalesRecord() {
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
            <h1>Titulo</h1>
        </div>
      </div>
      <Ownfooter/>
    </div>
  );
}

export default SalesRecord;
