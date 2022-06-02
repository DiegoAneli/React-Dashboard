import React from 'react'
import { Outlet } from 'react-router-dom';
import Login from './components/login';

const useAuth = () => {
    const user = {loggedIn: false};
    return user && user.loggedIn;
};

const ProtectedRoutes = () => {
    const isAuth = useAuth();
    return isAuth ? <Outlet/> : <Login />;
};

export default ProtectedRoutes


//METODO DI AUTENTICAZIONE ROTTE PAGINE, APPLICABILE SENZA IL LOGIN GOOGLE