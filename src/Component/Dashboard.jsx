import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import React, { useState, useEffect } from 'react';
import { NavLink, useLoaderData } from 'react-router-dom';
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoIosHeartEmpty } from "react-icons/io";
import { getStoredCartList } from '../utility/cartDb';
import Gadget from './Gadget';

const Dashboard = () => {

    const [cartList, setCartList] = useState([]);

    const allGadgets = useLoaderData();

    useEffect(() => {
        
        const storedCartList = getStoredCartList();
       
        const storedCartListInt = storedCartList.map(id => parseInt(id));
       
        const addedCartList = allGadgets.filter(gadget => storedCartListInt.includes(gadget.product_id));
     
        setCartList(addedCartList);

    }, [allGadgets])

    const links = (
        <>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="statistic">Statistics</NavLink></li>
            <li><NavLink to="dashboard">Dashboard</NavLink></li>
        </>
    );

    return (
        <div>
            {/* navbar start */}
            <div className="navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow ">
                            {links}
                        </ul>
                    </div>
                    <a className="font-bold text-xl text-[#0B0B0B]">Gadget Heaven</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-[#0B0B0BB3]">

                        {links}

                    </ul>
                </div>
                <div className="navbar-end gap-3">
                    <a className='border rounded-full p-2 bg-white'><AiOutlineShoppingCart></AiOutlineShoppingCart></a>
                    <a className='border rounded-full p-2 bg-white'><IoIosHeartEmpty></IoIosHeartEmpty></a>
                </div>
            </div>
            <div className='text-center bg-[#9538E2] text-white py-6 border rounded-xl'>
                <h1 className='font-bold text-3xl '>Dashboard</h1>
                <p>Explore the latest gadgets that will take your experience to the next level. From smart devices to <br />the coolest accessories, we have it all!</p>
            </div>

            <div className='max-w-4xl mx-auto flex justify-end  font-bold py-4'>

                <div className='flex items-center space-x-4'>
                    <h3>Total Cost:</h3>

                    <button className="text-[#9538E2] border border-[#9538E2] rounded-full w-40 h-12 ">
                        Sort By Price
                    </button>

                    <button className='text-white bg-[#9538E2] border border-white rounded-full w-40 h-12'>Purchase</button>

                </div>

            </div>

            <Tabs className="py-10">

                <TabList className='flex flex-row gap-x-5 justify-center py-5'>
                    <Tab className='flex items-center justify-center font-bold border rounded-full bg-white text-[#9538E2]  w-40 h-12'>Cart
                    </Tab>
                    <Tab className='flex items-center justify-center  font-bold border rounded-full bg-white text-[#9538E2] w-40 h-12'>Wishlist</Tab>
                </TabList>

                <TabPanel>
                    <h2 className='text-xl font-bold text-black'>Cart:{cartList.length}</h2>
                    {
                        cartList.map(gadget => <Gadget key={gadget.product_id} gadget={gadget} />)
                    }
                </TabPanel>
                <TabPanel>
                    <h2 className='text-xl font-bold text-black'>Wishlist</h2>

                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Dashboard;
