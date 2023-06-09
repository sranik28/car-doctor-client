import { AiOutlineArrowRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const SingleService = ({ singleService }) => {
    // console.log({ singleService })
    const { _id, img, title, price } = singleService;


    return (
        <div className='w-[364px] border'>
            <div>
                <img className='w-[320px] h-[200px] object-cover mx-auto p-2 rounded-md' src={img} alt="" />
                <h2 className='text-3xl font-semibold text-[#444444] px-6 my-3'>{title}</h2>
                <div className='flex justify-between items-center'>
                    <p className='text-[#FF3811] text-2xl px-6 mb-2'>Price : {price}</p>
                    <span className='text-[#FF3811]'><Link to={`/check-out/${_id}`}><AiOutlineArrowRight /></Link></span>
                </div>
            </div>
        </div>
    );
};

export default SingleService;