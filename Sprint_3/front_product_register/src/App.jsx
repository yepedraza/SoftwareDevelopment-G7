import React, {useEffect, useState} from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ProductList } from './components/ProductList/ProductList';
import { CreateProduct } from './components/CreateProduct/CreateProduct';
import { EditProduct } from './components/EditProduct/EditProduct';
import { Login } from './components/Login/Login';
import { Signup } from "./components/Signup/Signup";
import { NotFound } from './components/NotFound';
import { Home } from './components/Home/Home';
import { getCurrentUser } from './services/AuthService';
import Main from './components/Main/Main';
import SalesRecord  from './components/SalesRecord/SalesRecord';
import { Product_Master } from './components/ProductMaster/Product_master';
import { UserList } from './components/Users/UserList';
import UserMaster from './components/UserMaster/UserMaster';
import { EditUsers } from './components/UsersEdit/UsersEdit';

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
          <Route exact path="/product_master" component={UserList} />
          <Route exact path="/sales" component={SalesRecord} />
          <Route exact path="/usermaster" component={UserMaster} />
          {user && (
                    <>
                        <Route exact path="/products/add" component={CreateProduct} />
                        <Route exact path="/products/edit/:id" component={EditProduct} />
                        <Route exact path="/users/edit/:id" component={EditUsers} />
                    </>
                )}  
          <Route component={NotFound} /> 
      </Switch>
      
    </BrowserRouter>
  )
}


export default App;