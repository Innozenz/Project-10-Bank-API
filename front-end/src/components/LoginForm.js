// LoginForm.js

import React, { useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {loginUser, logoutUser} from '../redux/authThunks';
import {useNavigate} from "react-router-dom";

const LoginForm = () => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigate();

    const myReduxState = useSelector((state) => state.auth);
    console.log(myReduxState);

    const handleLogin = () => {
        dispatch(loginUser(email, password, navigation));
    };

    const handlelogout = () => {
        dispatch(logoutUser());
    }

    return (
        <div>
            <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleLogin}>Login</button>
            <button onClick={handlelogout}>Logout</button>
            {myReduxState.isAuthenticated ? <p>Connecté</p>
            : <p>Pas connecté</p>


            }
        </div>
    );
};

export default LoginForm;
