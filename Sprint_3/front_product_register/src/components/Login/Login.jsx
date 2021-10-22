import React, { useState } from 'react';
import "./Login.css";
//import Ownheader from "../Header/Ownheader";
import { Grid, TextField, makeStyles, Button } from '@material-ui/core';
import Ownfooter from "../Footer/Ownfooter";
import { NavLink } from 'react-router-dom';
import { loginAuth } from '../../services/AuthService';

const initialValue = {
    email: '',
    password: ''
}

export function Login() {

    const [credentials, setCredentials] = useState(initialValue)

    const {email, password} = credentials

    const onValueChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    }

    const startLogin = async () => {
        let response = await loginAuth(credentials);
        if(response.status === 200){
            let token = response.data.token;
            localStorage.setItem('token',token);
            window.location = "/menu";
        }
    }

  return (
    <div className="App">
      
      <div class="loggin-container">
        <div class="loggin-info-container">
          <hi class="title">log in with</hi>
          <div class="social-login">
            <div class="social-login-element">
              <div src="Images/google.svg" alt="google-image" srcset="" />
              <span>Google</span>
            </div>
            <div class="social-login-element">
              <div src="Images/facebook.svg" alt="google-image" srcset="" />
              <span>Facebook</span>
            </div>
          </div>
          <p>Or</p>

          <form class="inputs-container" action="">
          <Grid container spacing={8} alignItems="flex-end">
            <Grid item md={true} sm={true} xs={true}>
                <TextField value={email} name="email" onChange={(e) => onValueChange(e)} label="Email" type="email" fullWidth autoFocus required />
            </Grid>
          </Grid>
          <Grid container spacing={8} alignItems="flex-end">
            <Grid item md={true} sm={true} xs={true}>
                <TextField  value={password} name="password" onChange={(e) => onValueChange(e)} label="Password" type="password" fullWidth required />
            </Grid>
          </Grid>
          <Grid container justify="center" style={{ marginTop: '10px' }}>
            <Button variant="outlined" onClick={() => startLogin()} color="primary" style={{ textTransform: "none" }}>Inicia sesión</Button>
          </Grid>
            {/* <p>
              ¿Forgot password? <span class="span"> Click here</span>
            </p> */}
            {/* <input class="input" type="password" placeholder="Password" />
            <button class="btn">Login</button>

            <p>
              ¿Don't have an account? 
            </p> */}

            <NavLink to="/Signup">
                <button class="btn-back"> Sign Up </button>
            </NavLink>

            <NavLink to="/">
                <button class="btn-back"> Back </button>
            </NavLink>
          </form>
        </div>
      </div>
      <Ownfooter />
    </div>
  );
}
