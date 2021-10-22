import React, { useState } from 'react'
import { Paper, Grid, TextField, makeStyles, Button, Typography } from '@material-ui/core';
import { createUser } from '../../services/UsersService'
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles({
    container: {
        width: '300px',
        padding: '4%',
        margin: '100px auto 0 auto',
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
        <Paper className={classes.container} >
            <Typography variant="h4">Registrase</Typography>
            <Grid container spacing={8} error alignItems="flex-end">
                <Grid item md={true} sm={true} xs={true}>
                    <TextField value={fullName} name="fullName" onChange={(e) => onValueChange(e)} label="Nombre Completo" type="text" fullWidth autoFocus required />
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
            <Grid container justify="center" style={{ marginTop: '10px' }}>
                <Button variant="outlined" onClick={() => registerUser()} color="primary" style={{ textTransform: "none" }}>Registrarse</Button>
            </Grid>
        </Paper>
    )
}