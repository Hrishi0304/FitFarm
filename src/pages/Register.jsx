import SignupImg from '../assets/signup.jpg';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Register() {
    const [isPasswordVisible1, setIsPasswordVisible1] = useState(false);
    const [isPasswordVisible2, setIsPasswordVisible2] = useState(false);
    const [username,setUsername] = useState('');
    const [email,setEmail] = useState('');
    const [phone,setPhone] = useState('');
    const [password,setPassword] = useState('');
    const [confirmPassword,setConfirmPassword] = useState('');

    const handleUsername = (event) => { setUsername(event.target.value) }; 
    const handleEmail = (event) => { setEmail(event.target.value) };
    const handlePhone = (event) => { setPhone(event.target.value) };  
    const handlePassword = (event) => { setPassword(event.target.value) }; 
    const handleCPassword = (event) => { setConfirmPassword(event.target.value) }; 

    const navigate = useNavigate();

    const signup = (event) => {
        event.preventDefault();
        if(password===confirmPassword){
            navigate('/login');
        }
        else{
            alert('Passwords do not match');
        }
    }

    return (
      <>
        <div className="register-page">
          <div className="register-img">
            <img src={SignupImg} alt="Sign up img" />
          </div>
          <div className="register-form">
            <div className="register">
              <form onSubmit={signup}>
                  <h1>Register</h1>

                  <div className="input-box">
                      <input type="text" placeholder='Your name' onChange={handleUsername} value={username} required />
                      <i className="fas fa-user"></i>
                  </div>

                  <div className="input-box">
                      <input type="email" placeholder='Your email' onChange={handleEmail} value={email} required />
                      <i class="fa-solid fa-envelope"></i>
                  </div>

                  <div className="input-box">
                      <input type="number" placeholder='Your contact no' onChange={handlePhone} value={phone} required />
                      <i class="fa-solid fa-phone"></i>
                  </div>

                  <div className="input-box">
                    <input type={isPasswordVisible1 ? 'text' : 'password'} placeholder='Enter password' onChange={handlePassword} value={password} required/>
                    <i className={isPasswordVisible1 ? 'fa-regular fa-eye' : 'fa-regular fa-eye-slash'}
            onClick={()=>{setIsPasswordVisible1(prev => !prev)}}></i>
                </div>

                  <div className="input-box">
                    <input type={isPasswordVisible2 ? 'text' : 'password'} placeholder='Confirm Password'onChange={handleCPassword} value={confirmPassword}  required/>
                    <i className={isPasswordVisible2 ? 'fa-regular fa-eye' : 'fa-regular fa-eye-slash'}
            onClick={()=>{setIsPasswordVisible2(prev => !prev)}}></i>
                  </div>

                  <div className="remember-forgot">
                      <label htmlFor=""><input type="checkbox"/> Remember Me</label>
                      <Link to="/">Forgot Password?</Link>
                  </div>

                  <input type="submit" value="Register" />

                  <div className='register-link'>
                      <p>Already have an account? <Link to="/login">Login</Link></p>
                  </div>
              </form>
            </div>
          </div>
        </div>
      </>
    );
}

export default Register;