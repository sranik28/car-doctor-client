import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../pages/header/NavBar';
import Footer from '../components/Footer';

const Root = () => {
    return (
        <div>
            <NavBar />
            <div className='md:min-h-[calc(100vh-100px)]'>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Root;