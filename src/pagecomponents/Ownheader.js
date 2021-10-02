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
                                        <i className="fas fa-bars"></i> Navegación
                                    </a>
                                    <div className="submenu">
                                        <a href="App.js">Login</a>
                                        <a href="SalesRecord.js">User master</a>
                                        <a href="v">Sales Register</a>
                                        <a href="r">Sales master </a>
                                        <a href="d">Product Register</a>
                                        <a href="r">Product Master</a>
                                    </div>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="RigthDiv">
                        <i className="fas fa-user"></i> Usuario
                    </div>
                </div>
            </header>
        )
    }
}
export default Ownheader;