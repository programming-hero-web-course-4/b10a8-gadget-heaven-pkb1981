import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Banner from './Banner';


const Root = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <Navbar></Navbar>
            <Banner></Banner>
            <Footer></Footer>
        </div>


    );
};

export default Root;