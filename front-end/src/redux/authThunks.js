// authThunks.js

import { loginStart, loginSuccess, loginFailure, logout } from './authSlice';

export const checkLoggedInUser = () => async (dispatch) => {
    // Vérifiez si un token est présent dans le stockage local
    const token = localStorage.getItem('token');

    if (token) {
        // Si un token est présent, considérez l'utilisateur comme connecté
        dispatch(loginSuccess({ token }));
    } else {
        // Sinon, considérez l'utilisateur comme déconnecté
        dispatch(logout());
    }
};


export const loginUser = (email, password, navigation) => async (dispatch) => {
    try {
        dispatch(loginStart());

        const response = await fetch('http://localhost:3001/api/v1/user/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        if (!response.ok) {
            throw new Error('Invalid credentials');
        }

        if (response.status === 200) {
            const data = await response.json();
            console.log(data);

            // Enregistrez le token dans le stockage local
            localStorage.setItem('token', data.body.token);

            dispatch(loginSuccess({ token: data.body.token }));
            navigation('/profile');
        }

    } catch (error) {
        dispatch(loginFailure(error.message));
    }
};

export const logoutUser = () => (dispatch) => {
    // Supprimez le token du stockage local lors de la déconnexion
    localStorage.removeItem('token');
    dispatch(logout());
};
