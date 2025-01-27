import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Banner from './Banner';
import { Outlet } from 'react-router-dom';


const Root = () => {
    return (
        <div className='max-w-5xl mx-auto'>
            <Navbar></Navbar>
            <Banner></Banner>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>


    );
};

export default Root;