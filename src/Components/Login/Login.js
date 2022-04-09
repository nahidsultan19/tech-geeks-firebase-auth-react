import React, { useEffect, useState } from "react";
import "./AuthForm.css";
import GoogleLogo from "../../Assets/Image/google.svg";
import { useNavigate } from "react-router-dom";
import { auth } from "../../Firebase/firebase.init";
import { GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";

const googleProvider = new GoogleAuthProvider()

const Login = () => {
  const navigate = useNavigate();


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')

  const handleGoogleSignIn = () => {
    console.log('Sign in clicked..')
    signInWithPopup(auth, googleProvider)
      .then(result => {
        const user = result.user;
        navigate('/')
        console.log(user);
      })
      .catch(error => {
        console.log(error);
      })
  }

  const handleEmail = (event) => {
    setEmail(event.target.value);
  }

  const handlePassowrd = (event) => {
    setPassword(event.target.value);
  }

  const handleSignInSubmit = event => {
    event.preventDefault();
    if (email && password) {
      signInWithEmailAndPassword(auth, email, password)
        .then(result => {
          const user = result.user;
          console.log(user);
          navigate('/');
          setEmail('');
          setPassword('');
        })
        .catch(error => {
          console.error(error);
        });
    }
  }





  return (
    <div className='auth-form-container '>
      <div className='auth-form'>
        <h1>Login</h1>
        <form onSubmit={handleSignInSubmit}>
          <div className='input-field'>
            <label htmlFor='email'>Email</label>
            <div className='input-wrapper'>
              <input onBlur={handleEmail} type='text' name='email' id='email' />
            </div>
          </div>
          <div className='input-field'>
            <label htmlFor='password'>Password</label>
            <div className='input-wrapper'>
              <input onBlur={handlePassowrd} type='password' name='password' id='password' />
            </div>
          </div>
          <button type='submit' className='auth-form-submit'>
            Login
          </button>
        </form>
        <p className='redirect'>
          New to Tech Geeks?{" "}
          <span onClick={() => navigate("/signup")}>Create New Account</span>
        </p>
        <div className='horizontal-divider'>
          <div className='line-left' />
          <p>or</p>
          <div className='line-right' />
        </div>
        <div className='input-wrapper'>
          <button onClick={handleGoogleSignIn} className='google-auth'>
            <img src={GoogleLogo} alt='' />
            <p> Continue with Google </p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
