import React from 'react';
import { useLoaderData } from 'react-router-dom';
import checkOutImg from '../assets/images/checkout/checkout.png'
import { useAuthData } from '../context/Context';

const CheckOut = () => {

    const { user } = useAuthData()
    const serviceCheckOut = useLoaderData();
    const { title, img, _id, price } = serviceCheckOut;


    const handelCheckOut = (e) => {
        e.preventDefault();

        const form = e.target;
        const firstName = form.firstName.value;
        const lastName = form.lastName.value;
        const email = form.email.value;
        const phon = form.phon.value;
        const date = form.date.value;
        const message = form.message.value
        const order = {
            customerFIrstName: firstName,
            customerLastName: lastName,
            customerEmail: email,
            serviceDate: date,
            customerPhon: phon,
            productPrice: price,
            img,
            productTitle: title,
            service_id: _id,
            customerMessage: message
        }
        console.log(order)

        fetch('http://localhost:5000/checkOuts', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }


    return (
        <div>
            <div className='relative my-6'>
                <img className='w-full ' src={checkOutImg} alt="" />
                <div className='absolute rounded-xl flex items-center h-full w-full left-0 top-0 bg-gradient-to-r from-[#151515ce] to-[rgba(21, 21, 21, 0)]'>
                    <h1 className='text-white text-5xl font-bold absolute top-36 left-20 '>Check Out</h1>
                </div>
            </div>

            <form onSubmit={handelCheckOut} className='bg-[#F3F3F3] py-2 mt-20'>
                <div className='grid md:grid-cols-2 gap-4 w-[70%] mx-auto'>

                    <input className='w-full py-2 outline-none border' type="text" name="firstName" id="" placeholder='First Name' required />
                    <input className='w-full py-2 outline-none border' type="text" name="lastName" id="" placeholder='Last Name' required />

                    <input className='w-full py-2 outline-none border' type="email" defaultValue={user?.email} name="email" id="" placeholder='Email' required />
                    <input className='w-full py-2 outline-none border' type="text" name="phon" id="" placeholder='Phon number' required />
                    <input className='w-full py-2 outline-none border' type="text" name="price" id="" placeholder='Price' required />
                    <input className='w-full py-2 outline-none border' type="date" name="date" id="" required />

                    <textarea name="message" id="" className='col-span-2 w-full outline-none border ' placeholder='Message'></textarea>
                </div>
                <input className='py-3 bg-[#FF3811] text-white font-semibold rounded-md w-[70%] mx-auto block mt-12' type="submit" value="Order Confirm" />
            </form>
        </div>
    );
};

export default CheckOut;