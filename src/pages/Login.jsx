import LoginImg from '../assets/login.jpg';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const handleEmail = (event) => { setEmail(event.target.value) };
    const handlePassword = (event) => { setPassword(event.target.value) }; 

    const navigate = useNavigate();

    const login = (event) => {
      event.preventDefault();
      navigate('/');
  }

    return (
      <>
        <div className="register-page">
          <div className="register-img">
            <img src={LoginImg} alt="Sign up img" />
          </div>
          <div className="register-form">
            <div className="register">
              <form onSubmit={login}>
                  <h1>Login</h1>
                  <div className="input-box">
                      <input type="email" placeholder='Your email' onChange={handleEmail} value={email} required />
                      <i class="fa-solid fa-envelope"></i>
                  </div>

                  <div className="input-box">
                    <input type={isPasswordVisible ? 'text' : 'password'} placeholder='Enter password' onChange={handlePassword} value={password} required/>
                    <i className={isPasswordVisible ? 'fa-regular fa-eye' : 'fa-regular fa-eye-slash'}
            onClick={()=>{setIsPasswordVisible(prev => !prev)}}></i>
                </div>

                  <div className="remember-forgot">
                      <label htmlFor=""><input type="checkbox"/> Remember Me</label>
                      <Link to="/">Forgot Password?</Link>
                  </div>

                  <input type="submit" value="Login" />

                  <div className='register-link'>
                      <p>Already have an account? <Link to="/signup">Register</Link></p>
                  </div>
              </form>
            </div>
          </div>
        </div>
      </>
    );
}

export default Login;