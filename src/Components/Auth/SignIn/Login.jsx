import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import './Login.css'
import { auth } from '../Firebase/firebase.config'
import {
    signOut,
} from "firebase/auth";
import SignFirebase from './SignFirebase';
import UseSignin from './UseSignin';
import { Oval, } from 'react-loader-spinner';
import { toast } from 'react-toastify';

export const signOutBtn = () => {
    signOut(auth)
        .then((userInfo) => {
            // setUser(userInfo) 
            console.log('Sign-Out Successfully');
        })
        .catch((err) => {
            toast.error(err.message);
        });
};

const Login = () => {
    const { userDetails, setUserDetails, handlePost, loading } = UseSignin();
    return (
        <div className="login">
            {loading ? (
                <div className="loader">
                    <Oval
                        height={120}
                        width={120}
                        color="rgba(232, 210, 16, 0.73)"
                        wrapperStyle={{}}
                        wrapperClass=""
                        visible={true}
                        ariaLabel='oval-loading'
                        secondaryColor="rgba(232, 210, 16, 0.73)"
                        strokeWidth={2}
                        strokeWidthSecondary={2}
                    />
                </div>
            ) : (
                <div className='LoginUser'>
                    <div className="logo">
                        <h1>Mola Fast<span>Score⚽</span></h1>
                    </div>
                    <form onSubmit={(e) => handlePost(e)}>
                        <input type="email" onChange={(e) => setUserDetails({ ...userDetails, email: e.target.value })} placeholder='abc@gmail.com' />
                        <input type="password" placeholder='Password' onChange={(e) => setUserDetails({ ...userDetails, password: e.target.value })} />
                        <div className="loginBtn">
                            {/* <button type='submit'>Login</button> */}
                            <input type="submit" value="Login" />
                            <div>Don't have an account yet?
                                <Link to='/signup'>Sign Up</Link>
                            </div>
                        </div>
                    </form>
                    <p className='or'>or</p>
                    <SignFirebase />
                </div>
            )}
        </div>
    )
};

export default Login;