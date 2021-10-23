import React, { useState } from 'react'
import { Grid, TextField, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles'
import { createUser } from '../../services/UsersService'
import { useHistory } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import "../Login/Login.css";

const useStyles = makeStyles({
    container: {
        width: '300px',
        padding: '4%',
        margin: '100px auto 0 auto',
    },
    button_: {
        color: '#FFFFFF',
        fontSize: 20,
        background: '#1a497a'
    }
})

const initialValue = {
    fullName: '',
    email: '', 
    password: ''
}


export function Signup() {
    const [newUser, setNewUser] = useState(initialValue)
    const { fullName, email, password } = newUser

    const classes = useStyles();

    let history = useHistory();

    const onValueChange = (e) => {
        setNewUser({ ...newUser, [e.target.name]: e.target.value });
        console.log(newUser);
    }

    const registerUser = async () => {
        let response = await createUser(newUser);
        if (response.status === 201) {
            history.push('/login')
        }
        else {
            console.error('Error creating user' + response.data.error);
        }
    }

    return (
        
            <div className = "App">
                <div class="loggin-container">
                    <div class="loggin-info-container">
                    <hi class="title">CREATE ACCOUNT</hi>
                    <form class="inputs-container" action="">
                        <Grid container spacing={8} error alignItems="flex-end">
                            <Grid item md={true} sm={true} xs={true}>
                                <TextField value={fullName} name="fullName" onChange={(e) => onValueChange(e)} label="Full Name" type="text" fullWidth autoFocus required />
                            </Grid>
                        </Grid>
                        <Grid container spacing={8} alignItems="flex-end">
                            <Grid item md={true} sm={true} xs={true}>
                                <TextField value={email} name="email" onChange={(e) => onValueChange(e)} label="Email" type="email" fullWidth autoFocus required />
                            </Grid>
                        </Grid>
                        <Grid container spacing={8} alignItems="flex-end">
                            <Grid item md={true} sm={true} xs={true}>
                                <TextField value={password} name="password" onChange={(e) => onValueChange(e)} label="Password" type="password" fullWidth required />
                            </Grid>
                        </Grid>
                        <Grid container justify="center" style={{ marginTop: '15px'}}>
                            <Button className={classes.button_} variant="outlined" onClick={() => registerUser()} style={{ textTransform: "none"}} >Registrarse</Button>
                        </Grid>
                        <NavLink to="/">
                            <button class="btn-back"> Back </button>
                        </NavLink>
                    </form>
                    </div>
                </div>
            </div>
        
    )
}