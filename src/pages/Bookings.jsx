import React, { useEffect, useState } from 'react';
import { useAuthData } from '../context/Context';
import banner from '../assets/images/cart details/Rectangle 1548.png'
import BookingBody from '../components/BookingBody';
import Swal from 'sweetalert2';

const Bookings = () => {

    const { user } = useAuthData();
    console.log(user.email)
    const [bookings, setBookings] = useState([]);

    const url = `http://localhost:5000/checkOuts?email=${user?.email}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setBookings(data)
            })
    }, [url])

    const HandelDelete = (id) => {

        fetch(`http://localhost:5000/checkOuts/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
                const remaining = bookings.filter(booking => booking._id !== id)
                setBookings(remaining)
            }
        })

    }


    const handelConfirm = (id) => {
        fetch(`http://localhost:5000/checkOuts/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'confirm' })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount > 0) {
                    const remaining = bookings.filter(booking => booking._id !== id);
                    const updated = bookings.find(booking => booking._id === id);
                    updated.status = 'confirm'
                    const newBookings = [updated, ...remaining];
                    setBookings(newBookings);
                }
            })
    }

    return (
        <div>
            <div className='relative '>
                <img className='w-full object-cover' src={banner} alt="" />
                <div className='absolute w-full h-full top-0 left-0 bg-gradient-to-r from-[#151515ce] to-[rgba(21, 21, 21, 0)]'>
                    <h1 className='absolute top-32 left-12 text-4xl font-bold text-white'>Cart Details</h1>
                    <p className='text-[#FF3811] absolute top-44 left-12'>Home - Product Details</p>
                </div>
            </div>

            <table className='w-full my-10'>
                <tbody>
                    {
                        bookings.map(booking => <BookingBody key={booking._id} booking={booking} HandelDelete={HandelDelete} handelConfirm={handelConfirm} />)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Bookings;