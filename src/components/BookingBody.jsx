import { MdClose } from 'react-icons/md';

const BookingBody = ({ booking, HandelDelete, handelConfirm }) => {
    const { img, serviceDate, productPrice, productTitle, _id, status } = booking;
    console.log(booking)


    return (
        <tr className='border-b-2 w-full text-center'>
            <td ><span className='p-3 rounded inline-block mx-2' style={{ background: "linear-gradient(90.74deg, rgba(119, 67, 32, 0.15) 0.16%, rgba(232, 197, 128, 0.15) 100%)" }} ><MdClose onClick={() => HandelDelete(_id)} className='cursor-pointer' /></span></td>
            <td className='flex gap-6 items-center py-4'>
                <img className='w-28 h-28  rounded-md mx-auto' src={img} alt={name} />
                <span className='py-4 text-2xl'>{productTitle}</span>
            </td>
            <td className='py-4'>{serviceDate}</td>
            <td className='py-4'>{productPrice}</td>
            <td>
                {
                    status === 'confirm' ? <span className="font-bold text-lg text-[#FF3811]">Confirmed</span> : <button onClick={() => handelConfirm(_id)} className='bg-[#FF3811] text-white px-5 py-2 rounded-md'>plzz Confirm</button>
                }
            </td>
        </tr>
    );
};

export default BookingBody;