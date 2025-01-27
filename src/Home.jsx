import React from 'react';
import Gadgets from './Component/Gadgets';
import Navbar from './Component/Navbar';
import Banner from'./Component/Banner'

const Home = () => {
    return (
       <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Gadgets></Gadgets>
       </div>
    );
};

export default Home;