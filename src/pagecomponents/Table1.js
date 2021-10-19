import React, { Component } from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import './Table.css';
import 'C:/Users/User/Desktop/salesrecordreact/node_modules/react-bootstrap-table/css/react-bootstrap-table.css'

class Table1 extends Component {
  render() {
    return (
      <div>
        <BootstrapTable data={this.props.data}>
          <TableHeaderColumn isKey dataField='saleid'>
            ID. Venta
          </TableHeaderColumn>
          <TableHeaderColumn dataField='productname'>
            Producto
          </TableHeaderColumn>
          <TableHeaderColumn dataField='productid'>
            ID. Producto
          </TableHeaderColumn>
          <TableHeaderColumn dataField='unitaryprice'>
            Precio Unitario
          </TableHeaderColumn>
          <TableHeaderColumn dataField='date'>
            Fecha
          </TableHeaderColumn>
          <TableHeaderColumn dataField='sale'>
            Cantidad
          </TableHeaderColumn>
          <TableHeaderColumn dataField='subtotal'>
            subtotal
          </TableHeaderColumn>
        </BootstrapTable>
      </div>
    );
  }
}

export default Table1;