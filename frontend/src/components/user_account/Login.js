import React, { useEffect, useState, useRef, useLayoutEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import ErrorMessage from '../modals/ErrorMessage';
import LoadingSpinner from '../modals/LoadingSpinner';
import { login } from '../redux/actions/userActions';
import { gsap, Power2 } from 'gsap';

const Login = (props) => {

    const dispatch = useDispatch()

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const redirect = props.location.search ? props.location.search.split('=')[1] : '/';

    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo, loading, error } = userLogin;

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(login(email, password))
    }

    const tl = useRef()
    const stagger = useRef()

    useEffect(() => {
        if (userInfo) {
            props.history.push(redirect)
        }
        
    }, [props.history, redirect, userInfo])

    useLayoutEffect(() => {
        
        tl.current = gsap.timeline()
        .from(stagger.current, {
            opacity: 0,
            // y: 100,
            duration: 1,
            ease: Power2,
            // delay:1,
        })
        
    }, [])

    return (
        <div className="flex-container-shopping">
           

            <div className="container-cart">
            <div className="cat-title">Sign In</div>
            <form className="borang-address" onSubmit={handleSubmit} ref={stagger}>

                {loading && <LoadingSpinner />}
                {error && <ErrorMessage variant='danger'>{error}</ErrorMessage>}
                <div >
                    <label htmlFor="email" className="isiborang">Email address</label>
                    <input type="email" className="isiborang" id="email" placeholder="Enter email" required onChange={(e) => setEmail(e.target.value)}></input>
                </div>
                <div>
                    <label htmlFor="password" className="isiborang">Password</label>
                    <input type="password" className="isiborang" id="password" placeholder="password" required onChange={(e) => setPassword(e.target.value)}></input>
                </div>
                <div className="center-pls">
                    
                    <button className="browse" type="submit">Sign In</button>
                </div>
                <div className="p-login">
                    Don't have an account? <Link to={`/register?redirect=${redirect}`}><span className="p-login-bold">Create one now.</span></Link>
                </div>
                </form>
                </div>

        </div>
    )
}

export default Login
