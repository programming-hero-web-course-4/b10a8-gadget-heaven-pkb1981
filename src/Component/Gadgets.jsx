import React, { useEffect, useState } from 'react';
import Gadget from './Gadget';

const Gadgets = () => {

    const [gadgets, setGadgets] = useState([]);

    useEffect(() => {
        fetch('/public/gadgets.json')
            .then(res => res.json())
            .then(data => setGadgets(data))
    }, [])

    return (
        <div className='mt-72'>
            <h1 className="text-4xl font-bold text-center mb-20">Explore Cutting-Edge Gadgets</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4   gap-4'>
                <div className='flex flex-col gap-8'>
                    <button className='p-2 border rounded-full bg-[#09080F0D]'>All Products</button>
                    <button className='p-2 border rounded-full bg-[#09080F0D]'>Laptops</button>
                    <button className='p-2 border rounded-full bg-[#09080F0D]'>Phones</button>
                    <button className='p-2 border rounded-full bg-[#09080F0D]'>Accessories</button>
                    <button className='p-2 border rounded-full bg-[#09080F0D]'>Smart Watches</button>
                    <button className='p-2 border rounded-full bg-[#09080F0D]'>MacBook</button>
                    <button className='p-2 border rounded-full bg-[#09080F0D]'>Iphone</button>
                </div>
                <div className="col-span-1 md:col-span-2 lg:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    gadgets.map(gadget => <Gadget gadget={gadget} key={gadget.product_id} ></Gadget>)
                }
                </div>
            </div>
        </div>
    );
};

export default Gadgets;