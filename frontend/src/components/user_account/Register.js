import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import ErrorMessage from '../modals/ErrorMessage';
import LoadingSpinner from '../modals/LoadingSpinner';
import { register } from '../redux/actions/userActions';
import { gsap, Power2 } from 'gsap';

const Register = (props) => {
  const dispatch = useDispatch()

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const redirect = props.location.search ? props.location.search.split('=')[1] : '/';

  const userRegister = useSelector((state) => state.userRegister);
  const { userInfo, loading, error } = userRegister;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Password and confirm password are not matched');
    } else {
      dispatch(register(name, email, password))
    }
  }
    
    const tl = useRef()
    const stagger = useRef()    
    
  useEffect(() => {
      if (userInfo) {
          props.history.push(redirect)
      }
      tl.current = gsap.timeline()
        .from(stagger.current, {
            opacity: 0,
            // y: 100,
            duration: 1,
            ease: Power2,
            // delay:1,
        })
  }, [props.history, redirect, userInfo])

  return (
      <div className="flex-container-shopping">
          <div className="container-cart ">
          <div className="cat-title">Create an Account</div>

          <form className="borang-address" onSubmit={handleSubmit} ref={stagger}>

              
              {loading && <LoadingSpinner />}
              {error && <ErrorMessage variant='danger'>{error}</ErrorMessage>}
              <div>
                  <label htmlFor="name" className="isiborang">Name</label>
                  <input type="text" className="isiborang" id="name" placeholder="Enter name" required onChange={(e) => setName(e.target.value)}></input>
              </div>
              <div>
                  <label htmlFor="email" className="isiborang">Email address</label>
                  <input type="email" className="isiborang" id="email" placeholder="Enter email" required onChange={(e) => setEmail(e.target.value)}></input>
              </div>
              <div>
                  <label htmlFor="password" className="isiborang">Password</label>
                  <input type="password" className="isiborang" id="password" placeholder="password" required onChange={(e) => setPassword(e.target.value)}></input>
              </div>
              <div>
                  <label htmlFor="confirmPassword" className="isiborang">Confirm Password</label>
                  <input type="password" className="isiborang" id="confirmPassword" placeholder="re-enter password" required onChange={(e) => setConfirmPassword(e.target.value)}></input>
              </div>
              <div className="center-pls">
                  
                  <button className="browse" type="submit">Register</button>
              </div>
              <div className="p-login">
                  Already have an account? <Link to={`/login?redirect=${redirect}`}><span className="p-login-bold">Sign in here.</span></Link>
              </div>
          </form></div>

      </div>
  )
}

export default Register