import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoIosHeartEmpty } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";

const GadgetDetail = () => {
    const { product_id } = useParams();

    const data = useLoaderData();
    const gadget = data.find(gadget => gadget.product_id === product_id)

    const { product_image, product_title, price, availability, description, Specification, rating } = gadget


    const links = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="statistic">Statistics</NavLink></li>
        <li><NavLink to="dashboard">Dashboard</NavLink></li>
    </>
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
            <div className='text-center text-white my-3 bg-[#9538E2] border rounded-xl'>
                <h2 className=' font-bold text-3xl py-2'>Product Details</h2>
                <p>Explore the latest gadgets that will take your experience to the next level. From smart devices <br /> to the coolest accessories, we have it all!</p>
            </div>
            <div className='flex gap-4 justify-center'>
                <div className='p-2 border rounded-xl'>
                    <img src={product_image} className='border rounded-xl' alt="" />
                </div>
                <div className='space-y-4'>
                    <h1>{product_title}</h1>
                    <p>Price:${price}</p>
                    <p>{description}</p>
                    <p>Specification:<ol>
                        {Specification.map((item, index) => (
                            <li key={index}>{index + 1}.{item}</li>
                        ))}
                    </ol>
                    </p>
                    <p>Rating:<br />
                     <div className='flex flex-row text-[#F9C004]'>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaStarHalfAlt></FaStarHalfAlt>

                    </div>
                        {rating}</p>
                    <div className='flex items-center'>
                        <button className='btn btn-sm bg-[#9538E2] text-white border rounded-full '>Add To Card <AiOutlineShoppingCart></AiOutlineShoppingCart></button>
                        <div className='ml-2 p-2 border rounded-full '><IoIosHeartEmpty></IoIosHeartEmpty></div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default GadgetDetail;