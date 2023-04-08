import React from 'react';
import Home from '../Nav/Home';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <Home></Home>
            <Footer></Footer>
            
            
            
        </div>
    );
};

export default Main;