import React, {Component} from 'react'
import { NavLink } from 'react-router-dom';
/*import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'*/
import './styleheader.css'
class Ownheader extends Component {
    
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
export default Ownheader;