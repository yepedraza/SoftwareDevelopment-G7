import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
//import { ProductList } from './components/ProductList/ProductList';
import { CreateProduct } from './components/CreateProduct/CreateProduct';
import Main from './components/Main/Main';

function App() {
  return (
    <BrowserRouter>
      <Main />
      <Switch>
          <Route exact path="/add" component={CreateProduct} />
                
      </Switch>
      
    </BrowserRouter>
  )
}


export default App;