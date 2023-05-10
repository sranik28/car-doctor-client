import React, { useEffect, useState } from 'react';
import SingleService from './SingleService';

const Service = () => {

    const [Services, setServices] = useState([]);
    const [moreServices, setMoreServices] = useState(true);
    const [count, setCount] = useState(3);


    const slider = Services.slice(0, count);

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])


    const handelMoreBtn = () => {
        setCount(Services.length)
        setMoreServices(false)
    }

    const handelLessBtn = () => {
        setCount(3)
        setMoreServices(true)
    }


    return (
        <div>
            <p className='text-center text-[#FF3811] font-bold'>Service</p>
            <h2 className='text-center text-4xl font-bold my-3'>Our Service Area</h2>
            <p className='mb-20 text-center text-[#737373]'>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
            <div className='grid md:grid-cols-3 gap-6'>
                {
                    slider.map(singleService => <SingleService key={singleService._id} singleService={singleService} />)
                }
            </div>
            <button onClick={handelMoreBtn} className={`appointment-btn block mx-auto my-10 ${moreServices ? "" : "hidden"}`}>More Services</button>
            <button onClick={handelLessBtn} className={`appointment-btn block mx-auto my-10 ${!moreServices ? "" : "hidden"}`}>Less Services</button>
        </div>
    );
};

export default Service;