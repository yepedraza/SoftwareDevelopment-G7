import React, { useState, useEffect } from 'react';
import { FormGroup, FormControl, InputLabel, Input, Button, RadioGroup, FormLabel, FormControlLabel, Radio } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles'
import { editUser, getUser } from '../../services/UsersService';
import { useHistory, useParams } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import Container from '../Container/Container';
import { Ownheader } from '../Header/Ownheader'
import Ownfooter from '../Footer/Ownfooter';
import { verifyToken } from '../../services/AuthService';
import { blue, pink } from '@material-ui/core/colors';
//import Button from '../Buttons/Buttons';

const StyleButton = require('../Buttons/Buttons').default

const initialValue = {
    fullName: '',
    email: '',
    password: ''
}

const useStyles = makeStyles({
    container: {
        width: '50%',
        margin: '2% 0 0 25%',
        '& > *': {
            marginTop: 15
        }
    }
})

export function EditUsers() {
    const [users, setUsers] = useState(initialValue);
    const { fullName, email, password } = users;
    const classes = useStyles();
    let history = useHistory();

    const { id } = useParams();

    useEffect(() => {
        verifyToken();
        loadUserData();
    }, [])

    const loadUserData = async () => {
        let response = await getUser(id);
        setUsers(response.data.data);
    }

    const onValueChange = (e) => {
        setUsers({ ...users, [e.target.name]: e.target.value });
    }


    const updateUsersData = async () => {
        await editUser(users);
        history.push('/product_master');
    }

    return (
        <main>
            <Ownheader />
                <div className = "Main">
                    <Container titulo="USER EDITION">
                        <FormGroup className={classes.container}>
                            
                            <FormControl>
                                <InputLabel htmlFor="my-input">Name</InputLabel>
                                <Input onChange={(e) => onValueChange(e)} name="fullName" value={fullName} id="my-input" />
                            </FormControl>
                            <FormControl>
                                <InputLabel htmlFor="my-input">Email</InputLabel>
                                <Input onChange={(e) => onValueChange(e)} name="email" value={email} id="my-input" />
                            </FormControl>
                            <FormControl>
                                <InputLabel htmlFor="my-input">Password</InputLabel>
                                <Input onChange={(e) => onValueChange(e)} type="password" name="password" value={password} id="my-input" />
                            </FormControl>
                            
                            <FormControl>
                                <Button variant="contained" onClick={() => updateUsersData()} color="primary">Edit User</Button>
                            </FormControl>

                        </FormGroup>
                    
                        <div className="Buttons">
                            <NavLink to="/product_master"> 
                                <StyleButton title= "Back"></StyleButton>
                            </NavLink>
                        </div>
                    </Container>
                </div>
            <Ownfooter />
        </main>
    )
}