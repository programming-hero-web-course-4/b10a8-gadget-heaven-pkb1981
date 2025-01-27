import React from 'react';
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoIosHeartEmpty } from "react-icons/io";
import { NavLink } from 'react-router-dom';


const Navbar = () => {

    const links = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="statistic">Statistics</NavLink></li>
        <li><NavLink to="dashboard">Dashboard</NavLink></li>
    </>
    return (
        <div className='my-5 pb-32 border rounded-xl bg-[#9538E2] relative'>
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
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl text-white">Gadget Heaven</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-white">

                        {links}

                    </ul>
                </div>
                <div className="navbar-end gap-3">
                    <a className='border rounded-full p-2 bg-white'><AiOutlineShoppingCart></AiOutlineShoppingCart></a>
                    <a className='border rounded-full p-2 bg-white'><IoIosHeartEmpty></IoIosHeartEmpty></a>
                </div>

            </div>
            {/* banner heading */}
            <h1 className='font-medium text-3xl text-white text-center pb-5 '>Upgrade Your Tech Accessorize with <br /> Gadget Heaven Accessories</h1>
            <h3 className='text-base font-normal text-white  text-center pb-5'>Explore the latest gadgets that will take your experience to the next level. From smart devices to <br /> the coolest accessories, we have it all!</h3>
            <div className='text-center pb-5'>
                <button className='text-[#9538E2] px-7 py-[10px] border rounded-3xl bg-white font-semibold text-base'>Shop Now</button>
            </div>

        </div>



    );
};

export default Navbar;