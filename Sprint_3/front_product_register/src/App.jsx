import React, {useEffect, useState} from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// Products
import { ProductList } from './components/ProductList/ProductList';
import { CreateProduct } from './components/CreateProduct/CreateProduct';
import { EditProduct } from './components/EditProduct/EditProduct';
// Login 
import { Login } from './components/Login/Login';
import { Signup } from "./components/Signup/Signup";
import { NotFound } from './components/NotFound';
import { Home } from './components/Home/Home';
import { getCurrentUser } from './services/AuthService';
import Main from './components/Main/Main';

function App() {

  const [user, setUser] = useState([])
    useEffect(() => {
        setUser(getCurrentUser());
    }, [])

  return (
    <BrowserRouter>

      <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/menu" component={Main} />
          <Route exact path="/prodList" component={ProductList} />
          {user && (
                    <>
                        <Route exact path="/products/add" component={CreateProduct} />
                        <Route exact path="/products/edit/:id" component={EditProduct} />
                    </>
                )}
          <Route component={NotFound} />   
      </Switch>
      
    </BrowserRouter>
  )
}


export default App;