import React from 'react';
import banner1 from '../../assets/images/banner/1.jpg'
import banner2 from '../../assets/images/banner/2.jpg'
import banner3 from '../../assets/images/banner/3.jpg'
import banner4 from '../../assets/images/banner/4.jpg'
// import banner5 from '../../assets/images/banner/5.jpg'
// import banner6 from '../../assets/images/banner/6.jpg'

const Banner = () => {
    return (
        <div className="carousel w-full relative  rounded">
            <div id="slide1" className="carousel-item  w-full  ">
                <div className='before:content-[""] h-full w-full before:bg-[#000000a3] relative before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 rounded-lg'>
                    <img src={banner1} className="w-full h-full rounded-xl object-cover" />
                    <div className="absolute h-full text-white gap-5  md:top-40 md:left-10 top-16  left-2 space-y-7">
                        <h2 className='text-6xl font-bold '>Affordable <br /> Price For Car <br /> Servicing</h2>
                        <p>There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
                        <div className='flex gap-5'>
                            <button className='Discover-btn'>Discover More</button>
                            <button className='outlet'>Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 md:bottom-5 bottom-0 ">
                    <a href="#slide4" className="btn btn-circle bg-[#15151567] ">❮</a>
                    <a href="#slide2" className="btn btn-circle bg-[#ff3911ce] ">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <div className='before:content-[""] h-screen w-full before:bg-[#000000a3] relative before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0'>
                    <img src={banner2} className="w-full h-screen object-cover " />
                    <div className="absolute h-full text-white gap-5  md:top-40 md:left-10 space-y-7">
                        <h2 className='text-6xl font-bold '>Affordable <br /> Price For Car <br /> Servicing</h2>
                        <p>There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
                        <div className='flex gap-5'>
                            <button className='Discover-btn'>Discover More</button>
                            <button className='outlet'>Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 md:bottom-5 ">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle bg-[#FF3811]">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <div className='before:content-[""] h-screen w-full before:bg-[#000000a3] relative before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0'>
                    <img src={banner3} className="w-full h-screen object-cover " />
                    <div className="absolute h-full text-white gap-5  md:top-40 md:left-10 space-y-7">
                        <h2 className='text-6xl font-bold '>Affordable <br /> Price For Car <br /> Servicing</h2>
                        <p>There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
                        <div className='flex gap-5'>
                            <button className='Discover-btn'>Discover More</button>
                            <button className='outlet'>Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-5 ">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle bg-[#FF3811]">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <div className='before:content-[""] h-screen w-full before:bg-[#000000a3] relative before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0'>
                    <img src={banner4} className="w-full h-screen object-cover " />
                    <div className="absolute h-full text-white gap-5  md:top-40 md:left-10 space-y-7">
                        <h2 className='text-6xl font-bold '>Affordable <br /> Price For Car <br /> Servicing</h2>
                        <p>There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
                        <div className='flex gap-5'>
                            <button className='Discover-btn'>Discover More</button>
                            <button className='outlet'>Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-5 ">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle bg-[#FF3811]">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;