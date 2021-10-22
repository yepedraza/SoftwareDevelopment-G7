import './UserMaster.css';
import Ownfooter from '../Footer/Ownfooter'
import Ownheader from '../Header/Ownheader'
import { Form, Input, Label, FormGroup, Button, ButtonGroup, FormFeedback} from 'reactstrap';
function UserMaster(){
    return(
      <div className='App'>
        <Ownheader/>
          <Form className='login-form'>  
            <h1> 
              <span className="font-weight-bold" className='tituloprincipal'>Actualizar Informacion</span>
            </h1>  
            <FormGroup className='formgroupstyle'>
              <Label className='titulos'>Nombres</Label>
              <Input type="text" name= "nombres" placeholder="Nombres" className='row-form' />
            </FormGroup>
            <FormGroup className='formgroupstyle'>
              <Label className='titulos'>Apellidos</Label>
              <Input type="text" name="apellidos" placeholder="Apellidos" className='row-form' />
            </FormGroup>
            <FormGroup className='formgroupstyle'>
              <Label className='titulos'>Identificacion</Label>
              <Input type="number" name="identificacion" placeholder="Identificacion" className='row-form' />
            </FormGroup>
            <FormGroup className='formgroupstyle'>
            <Label className='titulos'>Celular</Label>
            <Input type="number" name= "numero_celular" placeholder="Numero Celular" className='row-form' />
            </FormGroup>
            <FormGroup className='formgroupstyle'>
              <Label className='titulos'>Correo Electornico</Label>
              <Input type="email" name="correo_electronico" placeholder="Correo Electronico" className='row-form'/>
            </FormGroup>
            <FormGroup className='formgroupstyle'>
              <Label className='titulos'>Nueva Contraseña</Label>
              <Input type="text" name="nueva_contraseña" placeholder="Nueva Contraseña" className='row-form' />
            </FormGroup>
            <FormGroup className='formgroupstyle'>
              <Label className='titulos'>Confirmar Contraseña</Label>
              <Input type="text" name="confirmar_contraseña" placeholder="Confirmar Contraseña" className='row-form' />
            </FormGroup>
            <FormGroup>
              <Button className="boton">Guardar Informacion</Button>
            </FormGroup>
          </Form>
        <Ownfooter/>
      </div>
    )
}

export default UserMaster;
