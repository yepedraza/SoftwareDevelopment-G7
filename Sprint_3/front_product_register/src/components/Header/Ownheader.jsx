import React, {Component} from 'react'
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
                                        <a href="App.js">Logout</a>
                                        <a href="SalesRecord.js">Users</a>
                                        <a href="v">Sales</a>
                                        <a href="d">Products</a>
                                        <a href="Menu">Product Master</a>
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