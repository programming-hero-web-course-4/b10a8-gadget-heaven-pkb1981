import React from 'react';

const Footer = () => {
    return (
        <div className='pt-60'>
            <h1 className='font-bold text-3xl text-center py-2'>Gadget Heaven</h1>
            <h3 className='text-xs text-center'>Leading the way in cutting-edge technology and innovation.</h3>
            <footer className="footer bg-white text-[#09080F99] p-10">
                <nav>
                    <h6 className="footer-title text-[#09080F]">Services</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <h6 className="footer-title text-[#09080F]">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <h6 className="footer-title text-[#09080F]">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer></div>

    );
};

export default Footer;