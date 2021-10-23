/*import React, {Component} from 'react'*/
import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom';
/*import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'*/
import './styleheader.css'
import { Button, ListItemText, ListItemAvatar, ListItem, Avatar, makeStyles } from '@material-ui/core'
import { getCurrentUser } from '../../services/AuthService';
import { blue, deepOrange } from '@material-ui/core/colors';

const useStyle = makeStyles({
    header: {
        background: '#111111'
    },
    tabs: {
        color: '#FFFFFF',
        marginRight: 20,
        textDecoration: 'none',
        fontSize: 16
    },
    tab_end: {
        color: '#FFFFFF',
        marginRight: 25,
        textDecoration: 'none',
        fontSize: 16,
        alignItems: 'end'

    }
})

const initialValue = {
    email: ""
}

export function Ownheader() {
    
    const [user, setUser] = useState(initialValue);
    
    const classes = useStyle();

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

                <Button className={classes.tab_end}>
                <ListItem >
                     <ListItemAvatar>
                         <Avatar sx={{ bgcolor:deepOrange[500], color: blue[100]}}>
                           👤
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={user.email} />
                </ListItem>
                <Button variant="contained" onClick={() => logout()} color="secondary">
                    Logout
                </Button>
                </Button>
            </div>
        </header>
    )

}

/*class Ownheader extends Component {
    
    render() {
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
                                    </a>
                                    <div className="submenu">
                                        <NavLink to="/">
                                            <a>Logout</a>
                                        </NavLink>
                                        <NavLink to="/Menu">
                                            <a>Products</a>
                                        </NavLink>
                                        <NavLink to="/sales">
                                        <a>Sales</a>
                                        </NavLink>
                                        <NavLink to="/usermaster">
                                        <a>UserMaster</a>
                                        </NavLink>                                        
                                        <a href="d">Products</a>
                                        <NavLink to="/product_master">
                                        <a>Product Master</a>
                                        </NavLink>
                                    </div>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="RigthDiv">
                        <i className="fas fa-user"></i> User
                    </div>
                </div>
            </header>
        )
    }
}
export default Ownheader;*/