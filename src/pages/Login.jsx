import React, { useState } from 'react';
import login from '../assets/images/login/login.svg'
import { Link } from 'react-router-dom';
import { FaFacebookF } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { AiFillLinkedin } from 'react-icons/ai';
import { useAuthData } from '../context/Context';


const Login = () => {

    const { signIn, signInGoogle } = useAuthData();
    const [error, setError] = useState("");

    const handelLogin = (e) => {
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        signIn(email, password)
            .then(result => {
                const users = result.user;
                console.log(users)
            })
            .catch(error => {
                console.log(error)
                setError(error.message)
            })

    }

    const handelGoogle = () => {
        signInGoogle()
            .then(result => { })
            .catch(error => { })
    }

    return (
        <div className='grid md:grid-cols-2 my-20 gap-6 px-3'>
            <img src={login} alt="" />
            <div>
                <h1 className='text-3xl font-bold text-center mb-5'>Login</h1>
                <form onSubmit={handelLogin} className='md:w-[60%]  mx-auto'>
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
                        <input type="password" placeholder="  password" className="py-2" name='password' required />
                    </div>
                    <p className='text-xl text-red-600'>{error}</p>
                    <input className='w-full mx-auto block py-3 bg-[#FF3811] text-white rounded-md my-10 ' type="submit" value="Sign In" />
                    <p className='text-center text-[#444444]'>Or Sign In with</p>
                    <div className=' flex gap-3 justify-center my-6'>
                        <span><FaFacebookF className='w-5 h-5 text-blue-600' /></span>
                        <span><AiFillLinkedin className='w-5 h-5 text-sky-600' /></span>
                        <span><FcGoogle onClick={handelGoogle} className='w-5 h-5 ' /></span>
                    </div>
                    <p className='text-center my-5'>Haven't an account? <Link className='text-[#FF3811] font-bold' to='/sign-up'>Sign Up</Link></p>
                </form>
            </div>
        </div>
    );
};

export default Login;