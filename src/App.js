import './App.css';
import Ownheader from './pagecomponents/Ownheader.js';
import Ownfooter from './pagecomponents/Ownfooter.js';

function App() {
  return (
    <div className="App">
        <Ownheader/>
      <div class="loggin-container">
        <div class="loggin-info-container">
            <hi class = "title">log in with</hi>
            <div class="social-login">
                <div class="social-login-element">
                    <div src = "Images/google.svg" alt = "google-image" srcset=""/>
                    <span>Google</span>
                </div>
                <div class="social-login-element">
                    <div src = "Images/facebook.svg" alt = "google-image" srcset=""/>
                    <span>Facebook</span>
                </div>
            </div>
            <p>or</p>
            <form class = "inputs-container" action="">
                <input class = "input" type="text" placeholder = "Username"/>
                <p>Forgot password?<span class = "span"> Click here</span></p>
                <input class = "input" type="password" placeholder = "Password"/>
                <button class = "btn">Login</button>
                <p>Don't have an account <span class = "span">Sign Up</span></p>
            </form>
        </div>
      </div>
      <Ownfooter/>
    </div>
  );
}

export default App;
