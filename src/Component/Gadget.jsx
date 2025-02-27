import React from 'react';
import { Link } from 'react-router-dom';

const Gadget = ({ gadget }) => {
    const { product_id, product_image, product_title, price } = gadget;

    return (
        // card from daisyui

        <div className="card card-compact bg-base-100 shadow-xl p-6 ">
            <figure className='bg-[#D9D9D9] py-8 rounded-xl'>
                <img className='border rounded-xl'
                    src={product_image}
                    alt="gadget" />
            </figure>
            <div className="card-body text-center items-center">
                <h2 className="card-title">{product_title}</h2>
                <p>Price:${price}</p>
                <div className="card-actions justify-center">

                    <Link to={`/gadgets/${product_id}`}>
                    <button className="btn btn-primary">View Details</button></Link>
                </div>
            </div>
        </div>

    );
};

export default Gadget;