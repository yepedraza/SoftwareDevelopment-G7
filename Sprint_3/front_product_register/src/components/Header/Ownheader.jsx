import React, { Component, useState, useEffect } from 'react'
/*import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'*/
import { AppBar, Toolbar, makeStyles, Button, Box, ListItemText, ListItemAvatar, ListItem, Avatar } from '@material-ui/core'
import './styleheader.css'
//import { NavLink } from 'react-router-dom';
import { getCurrentUser } from '../../services/AuthService';
import { blue } from '@material-ui/core/colors';

const initialValue = {
    email: ""
}


export function Ownheader() {
    
        const [user, setUser] = useState(initialValue);
        
        useEffect(() => {
            setUser(getCurrentUser());
        }, []);

        const logout = () => {
            localStorage.clear();
            window.location = "/";
        }

        return (
            <header>
                <script src="https://kit.fontawesome.com/f239b2f471.js" crossorigin="anonymous"></script>
                <div className = "MainContainer">
                    <div className = "LeftDiv">
                        <nav className="barra">
                            <ul className="navegacion">
                                <li className="enlace" id="perfil">
                                    <a href="#perfil" className="padre">
                                        <i className="fas fa-bars"></i> Options

                                        {/* <ListItemAvatar>
                                            <Avatar sx={{ bgcolor: 'blue', color: 'blue', display: 'inline'}}>
                                            📋
                                            </Avatar>
                                        </ListItemAvatar> */}
                                    </a>
                                    {user && (
                                        <>
                                            
                                        
                                            <div className="submenu">
                                                <a href="usuarios">Users</a>
                                                <a href="sales">Sales</a>
                                                <a href="Menu">Products</a>
                                            </div>
                                        </>
                                    )}
                                </li>
                            </ul>
                        </nav>
                    </div>

                    
                    <ListItem>
                         <ListItemAvatar>
                             <Avatar sx={{ bgcolor: blue[100], color: blue[600], display: 'inline'}}>
                               👤
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={user.email} />
                    </ListItem>
                    <Button variant="contained" onClick={() => logout()} color="secondary">
                        Logout
                    </Button>
                    
                </div>
            </header>
        )
    
}
// export default Ownheader;