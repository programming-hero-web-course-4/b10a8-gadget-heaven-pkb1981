import React from 'react';
import Gadgets from './Component/Gadgets';
import Navbar from './Component/Navbar';
import Banner from'./Component/Banner'
import Footer from './Component/Footer';

const Home = () => {
    return (
       <div className='max-w-5xl mx-auto'>
            <Navbar></Navbar>
            <Banner></Banner>
            <Gadgets></Gadgets>
            <Footer></Footer>
       </div>
    );
};

export default Home;