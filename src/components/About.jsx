import React from 'react';
import person from '../assets/images/about_us/person.jpg';
import parts from '../assets/images/about_us/parts.jpg';

const About = () => {
    return (
        <div className='md:flex mb-28 gap-20'>
            <div className='w-1/2 relative'>
                <img className='w-[521px]' src={person} alt="" />
                <img className='w-[300px] absolute -right-8 top-1/2 border-8 border-white' src={parts} alt="" />
            </div>
            <div>
                <p className=' my-2 text-[#FF3811] font-bold'>About Us</p>
                <h1 className='text-5xl font-bold'>We are qualified <br /> & of experience <br /> in this field</h1>
                <p className='text-[#737373] my-2'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                <p className='text-[#737373] my-2'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                <button className='Discover-btn mt-5'>Get More Info</button>
            </div>
        </div>
    );
};

export default About;