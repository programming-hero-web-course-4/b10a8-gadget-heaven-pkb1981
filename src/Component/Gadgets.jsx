import React, { useEffect, useState } from 'react';
import Gadget from './Gadget';

const Gadgets = () => {
    
    const[gadgets,setGadgets]=useState([]);
    
    useEffect(()=>{
        fetch('/public/gadgets.json')
        .then(res=>res.json())
        .then(data=>setGadgets(data))
    },[])

    return (
        <div className='mt-72'>
            <h1 className="text-4xl font-bold text-center mb-20">Explore Cutting-Edge Gadgets</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    gadgets.map(gadget=><Gadget gadget={gadget} key={gadget.product_id} ></Gadget>)
                }
            </div>
        </div>
    );
};

export default Gadgets;