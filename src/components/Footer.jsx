import React from 'react';
import logo from '../assets/logo.svg'
const Footer = () => {
    return (
        <div>
            <div className="bg-[#151515] ">
                <div className="max-w-[1240px] mx-auto grid md:grid-cols-5 text-gray-300 gap-10 mt-10 mb-10 py-12 px-6">
                    <div>
                        <img className='w-20 h-20 -mb-2' src={logo} alt="" />
                        <p className="py-4">There are many variations of passages of Lorem Ipsum , but the majority have suffered alteration in some form.</p>
                        
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold mt-10">Company</h1>
                        <p className="py-2">About Us</p>
                        <p>Work</p>
                        <p className="py-2">Latest News</p>
                        <p>Carear Goal</p>
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold mt-10">Product</h1>
                        <p className="py-2">Prototype</p>
                        <p>Plans & Pricing</p>
                        <p className="py-2">Customers</p>
                        <p>Intergrations</p>
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold mt-10">Support</h1>
                        <p className="py-2">Help Desk</p>
                        <p>Sales</p>
                        <p className="py-2">Become a Partner</p>
                        <p>Developers</p>
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold mt-10">Contact</h1>
                        <p className="py-2">Dhaka, Bangladesh</p>
                        <p>+880 1259876312</p>
                        <p className="py-2">info@CarDoctor.com</p>
                        <p>Carear Goal</p>
                    </div>
                </div>
                <hr className='border-1 border-gray-600 max-w-[1240px] mx-auto py-5' />
                <div className="md:flex justify-between text-gray-500 max-w-[1240px] mx-auto px-6 pb-8">
                    <h1>@2023 CarDoctor
                        . All Rights Reserved</h1>
                    <h1>Powered by <span className="font-bold">Car Doctor
                    </span></h1>
                </div>
            </div>
            <h1>anik</h1>
        </div>
    );
};

export default Footer;