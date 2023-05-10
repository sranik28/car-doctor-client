import React, { useEffect, useState } from 'react';
import login from '../assets/images/login/login.svg'
import { Link } from 'react-router-dom';
import { useAuthData } from '../context/Context';



const SingUp = () => {

    const { createAccount } = useAuthData()
    const [error, setError] = useState("");
    const [success, setsSuccess] = useState("");

    const handelSignUp = (e) => {

        e.preventDefault();
        setsSuccess();
        setError();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password)

        createAccount(email, password)
            .then(result => {
                const currentUser = result.user;
                console.log(currentUser)
                setsSuccess('account create Successfully')
                form.reset()
            })
            .catch(error => {
                console.log(error)
                setError(error.message)
            })

    }



    return (
        <div className='grid md:grid-cols-2 my-20 gap-6 px-3'>
            <img src={login} alt="" />
            <div>
                <h1 className='text-3xl font-bold text-center mb-5'>Sing Up</h1>
                <form onSubmit={handelSignUp} className='md:w-[60%]  mx-auto'>
                    <div className="form-control">
                        <label className="label">
                            <span className="text-[#444444] font-semibold text-lg text-center">Name</span>
                        </label>
                        <input type="text" placeholder="  name" className=" py-2 " name='name' required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="text-[#444444] font-semibold text-lg text-center">Email</span>
                        </label>
                        <input type="email" placeholder="  email" className=" py-2 " name='email' required />
                    </div>
                    <div className="form-control my-3">
                        <label className="label text-center">
                            <span className="text-[#444444] font-semibold text-lg "> Password</span>
                        </label>
                        <input type="password" placeholder="  password" className=" py-2" name='password' required />
                    </div>
                    <p className='text-xl text-red-600'>{error}</p>
                    <p className='text-xl text-green-500'>{success}</p>
                    <input className='w-full mx-auto block py-3 bg-[#FF3811] text-white rounded-md my-10 ' type="submit" value="Sign Up" />

                    <p className='text-center my-5'>Already have an account?  <Link className='text-[#FF3811] font-bold' to='/login'>Login</Link></p>
                </form>
            </div>
        </div>
    );
};

export default SingUp;