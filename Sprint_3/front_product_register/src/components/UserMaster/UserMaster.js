import './UserMaster.css';
import Ownfooter from '../Footer/Ownfooter'
import { Ownheader } from '../Header/Ownheader'
import react, { useState, useEffect } from 'react';
import { Form, Input, Label, FormGroup, Button, ButtonGroup, FormFeedback} from 'reactstrap';
import { editUser } from '../../services/UsersService';
import { useHistory, useParams } from 'react-router-dom';

const initialValue = {
  fullname: '',
  email: '',
  password: '',
}

function UserMaster(){
  const [user, setUser] = useState(initialValue);
  const {fullname,email,password} = user;
  let history = useHistory();


  const onValueChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value});
  }


  const updateUser = async () =>{
    await editUser(user);
    history.push('/users');
  }
    return(
      <div className='App'>
        <Ownheader/>
          <Form className='login-form'>  
            <h1> 
              <span className="font-weight-bold" className='tituloprincipal'>Actualizar Informacion</span>
            </h1>  
            <FormGroup className='formgroupstyle'>
              <Label className='titulos'>Nombres y apellidos</Label>
              <Input type="text" name= "fullname" onChange={(e) => onValueChange(e)} placeholder="Nombres y Apellidos" className='row-form' value={fullname} />            </FormGroup>
            <FormGroup className='formgroupstyle'>
              <Label className='titulos'>Correo Electornico</Label>
              <Input type="email" name="email" onChange={(e) => onValueChange(e)} placeholder="Correo Electronico" className='row-form' value={email}/>            </FormGroup>
            <FormGroup className='formgroupstyle'>
              <Label className='titulos'>Nueva Contraseña</Label>
              <Input type="password" name="password"  onChange={(e) => onValueChange(e)} placeholder="Nueva Contraseña" className='row-form' value={password} />            </FormGroup>
            <FormGroup>
            <Button className="boton" onClick={() => updateUser()}>Guardar Informacion</Button>
            </FormGroup>
          </Form>
        <Ownfooter/>
      </div>
    )
}

export default UserMaster;
