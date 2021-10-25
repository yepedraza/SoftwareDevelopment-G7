import React, { useState, useEffect } from 'react'
import { Table, TableHead, TableCell, TableRow, TableBody, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles'
import { getUsers } from '../../services/UsersService';
import { Link } from 'react-router-dom';
import Container from '../Container/Container';
import Ownfooter from '../Footer/Ownfooter'
import { Ownheader } from '../Header/Ownheader'
import { NavLink } from 'react-router-dom';
import { getCurrentUser } from '../../services/AuthService';


const StyleButton = require('../Buttons/Buttons').default

const useStyles = makeStyles({
    table: {
        width: '95%',
        margin: '1px 0 0 30px'
    },
    thead: {
        '& > *': {
            width: 'auto',
            fontSize: 17,
            background: '#2bb4c8',
            color: '#FFFFFF',
            family: 'Nunito,Helvetica,Arial,sans-serif'
        }
    },
    row: {
        '& > *': {
            fontSize: 15,
            color: '#1a497a',
            family: 'Nunito,Helvetica,Arial,sans-serif'
        }
    },
    button: {
        marginInline: '20px'
    },
    button_add: {
        textAlign: "right"
    }
})

export function UserList() {
    const classes = useStyles();

    const [user, setUser] = useState([])
    const [users, setUsers] = useState([])

    useEffect(() => {
        getAllUsers();
        setUser(getCurrentUser());
    }, [])

    const getAllUsers = async () => {
        let response = await getUsers();
        console.log(response);
        setUsers(response.data.data);
    }

    return (
        <main>
            <Ownheader />
                <div className = "main">
                    <Container titulo="USER LIST">
                    <section className = "main-input">
                        <Table className={classes.table}>
                            <TableHead>
                                <TableRow className={classes.thead}>
                                    <TableCell>Id User</TableCell>
                                    <TableCell>Name</TableCell>
                                    <TableCell>E-mail</TableCell>
                                    <TableCell></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    users.map(users => (
                                        <TableRow className={classes.row} key={users._id}>
                                            <TableCell>{users._id}</TableCell>
                                            <TableCell>{users.fullName}</TableCell>
                                            <TableCell>{users.email}</TableCell>
                                            {user
                                                &&
                                                (<TableCell>
                                                    <Button variant="contained" component={Link} to={`/users/edit/${users._id}`} color="primary">Edit</Button>
                                                </TableCell>)
                                            }
                                        </TableRow>
                                    ))
                                }
                            </TableBody>
                            
                        </Table>
                    </section>
                        <div className="Buttons">
                                <NavLink to="/menu"> 
                                    <StyleButton title= "Back"></StyleButton>
                                </NavLink>
                        </div>
                    </Container>
                </div>
            <Ownfooter />
        </main>
    )
}
