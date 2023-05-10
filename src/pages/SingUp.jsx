import React from 'react';
import login from '../assets/images/login/login.svg'
import { Link } from 'react-router-dom';

const SingUp = () => {
    return (
        <div className='grid md:grid-cols-2 my-20 gap-6 px-3'>
            <img src={login} alt="" />
            <div>
                <h1 className='text-3xl font-bold text-center mb-5'>Sing Up</h1>
                <form className='md:w-[60%]  mx-auto'>
                    <div className="form-control">
                        <label className="label">
                            <span className="text-[#444444] font-semibold text-lg text-center">Name</span>
                        </label>
                        <input type="text" placeholder="  name" className=" py-2 " required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="text-[#444444] font-semibold text-lg text-center">Email</span>
                        </label>
                        <input type="email" placeholder="  email" className=" py-2 " required />
                    </div>
                    <div className="form-control my-3">
                        <label className="label text-center">
                            <span className="text-[#444444] font-semibold text-lg "> Password</span>
                        </label>
                        <input type="password" placeholder="  password" className="  py-2 " required />
                    </div>
                    <input className='w-full mx-auto block py-3 bg-[#FF3811] text-white rounded-md my-10 ' type="submit" value="Sign Up" />

                    <p className='text-center my-5'>Already have an account?  <Link className='text-[#FF3811] font-bold' to='/login'>Login</Link></p>
                </form>
            </div>
        </div>
    );
};

export default SingUp;