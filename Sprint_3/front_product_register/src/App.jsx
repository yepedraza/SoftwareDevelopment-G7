import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ProductList } from './components/ProductList/ProductList';
import { CreateProduct } from './components/CreateProduct/CreateProduct';
import { EditProduct } from './components/EditProduct/EditProduct';
import { NotFound } from './components/NotFound';
import { Home } from './components/Home/Home';
import Main from './components/Main/Main';

function App() {
  return (
    <BrowserRouter>
      {//<Main />
      }
      <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Menu" component={Main} />
          <Route exact path="/list" component={ProductList} />
          <Route exact path="/add" component={CreateProduct} />
          <Route exact path="/edit/:id" component={EditProduct} />
          <Route component={NotFound} />   
      </Switch>
      
    </BrowserRouter>
  )
}


export default App;