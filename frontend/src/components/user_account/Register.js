import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import ErrorMessage from '../modals/ErrorMessage';
import LoadingSpinner from '../modals/LoadingSpinner';
import { register } from '../redux/actions/userActions';

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

  useEffect(() => {
      if (userInfo) {
          props.history.push(redirect)
      }
  }, [props.history, redirect, userInfo])

  return (
      <div>
          <form className="form" onSubmit={handleSubmit}>

              <div><h1>Create an Account</h1></div>
              {loading && <LoadingSpinner />}
              {error && <ErrorMessage variant='danger'>{error}</ErrorMessage>}
              <div>
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" placeholder="Enter name" required onChange={(e) => setName(e.target.value)}></input>
              </div>
              <div>
                  <label htmlFor="email">Email address</label>
                  <input type="email" id="email" placeholder="Enter email" required onChange={(e) => setEmail(e.target.value)}></input>
              </div>
              <div>
                  <label htmlFor="password">Password</label>
                  <input type="password" id="password" placeholder="password" required onChange={(e) => setPassword(e.target.value)}></input>
              </div>
              <div>
                  <label htmlFor="confirmPassword">Confirm Password</label>
                  <input type="password" id="confirmPassword" placeholder="re-enter password" required onChange={(e) => setConfirmPassword(e.target.value)}></input>
              </div>
              <div>
                  <label />
                  <button className="primary" type="submit">Register</button>
              </div>
              <div><label />
                  Already have an account? <Link to={`/login?redirect=${redirect}`}>Sign in here.</Link>
              </div>
          </form>

      </div>
  )
}

export default Register