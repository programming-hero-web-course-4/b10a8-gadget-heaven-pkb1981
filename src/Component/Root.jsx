import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Component/Footer';

const Root = () => {
    return (
        <div className='max-w-5xl mx-auto'>
            
           
            <Outlet></Outlet>
            <Footer></Footer>
        </div>


    );
};

export default Root;