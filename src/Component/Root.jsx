import React from 'react';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';


const Root = () => {
    return (
        <div className='max-w-5xl mx-auto'>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>


    );
};

export default Root;