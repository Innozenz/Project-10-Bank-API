import React from 'react';
import {useSelector} from "react-redux";
import {Route, Routes} from "react-router-dom";
import App from "../App";

const Profile = () => {
    const myReduxState = useSelector((state) => state.auth);
    console.log(myReduxState);

    return (
        myReduxState.isAuthenticated ? (
        <div>
            Test
        </div>
        )
        : (<Routes><Route path='/*' element={<App />} /></Routes>)

    );
};

export default Profile;