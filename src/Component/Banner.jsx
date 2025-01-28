import React from 'react';
import bannerImg from '../assets/banner.jpg'
const Banner = () => {
    return (

        <div className='absolute top-80 left-80'>
            <img src={bannerImg} className='w-[635px] h-[370px] border border-none rounded-3xl' alt="" />
        </div>



    );
};

export default Banner;