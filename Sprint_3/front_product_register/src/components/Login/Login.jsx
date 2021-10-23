import "./Login.css";
//import Ownheader from "../Header/Ownheader";
import Ownfooter from "../Footer/Ownfooter";
import { NavLink } from 'react-router-dom';

const initialValue = {
    email: '',
    password: ''
}

// export function Login() {

//     const [credentials, setCredentials] = useState(initialValue)

//     const {email, password} = credentials

//     const classes = useStyles();

//     const onValueChange = (e) => {
//         setCredentials({ ...credentials, [e.target.name]: e.target.value });
//     }

//     const startLogin = async () => {
//         let response = await loginAuth(credentials);
//         if(response.status === 200){
//             let token = response.data.token;
//             localStorage.setItem('token',token);
//             window.location = "/";
//         }
//     }

const Login = () => {
  return (
    <div className="App">
      <header>
                <script src="https://kit.fontawesome.com/f239b2f471.js" crossorigin="anonymous"></script>
                <div className = "MainContainer">
                    <div className = "LeftDiv">
                        <nav className="barra">
                            <ul className="navegacion">
                                <li className="enlace" id="perfil">
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
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
            <input class="input" type="text" placeholder="Username" />
            <p>
              ¿Forgot password? <span class="span"> Click here</span>
            </p>
            <input class="input" type="password" placeholder="Password" />
            <button class="btn">Login</button>

            <p>
              ¿Don't have an account? <span class="span"> Sign Up</span>
            </p>
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

export default Login
