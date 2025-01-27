import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const GadgetDetail = () => {
    const {product_id}=useParams();
    
    const data=useLoaderData();
    const gadget=data.find(gadget=>gadget.product_id===product_id)
    console.log(gadget);
    return (
        <div>
            <h2 className='text-center  font-bold text-3xl'>Product Details</h2>
            <p>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
        </div>
    );
};

export default GadgetDetail;