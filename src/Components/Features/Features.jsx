
import { TbTruckDelivery } from 'react-icons/tb';
import { AiOutlineDollarCircle } from 'react-icons/ai';
import { MdOutlineRememberMe } from 'react-icons/md';
import { BiPhoneCall } from 'react-icons/bi';

const Features = () => {
    return (
        <div className='max-w-screen-xl px-4 mx-auto mb-10'>
            <div className='mb-6'>
                <h1 className='text-center text-4xl font-bold'>Our Features</h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2'>
                <div className='bg-sky-200 px-4 py-8 text-black flex gap-2 items-center justify-center'>
                    <span><TbTruckDelivery className='text-4xl' /></span>
                    <div>
                        <h1 className='text-xl font-semibold'>Free Delivery</h1>
                        <span className='font-semibold text-gray-800'>Orders from all item.</span>
                    </div>
                </div>
                <div className='bg-sky-200 px-4 py-8 text-black flex gap-2 items-center justify-center'>
                    <span><AiOutlineDollarCircle className='text-4xl' /></span>
                    <div>
                        <h1 className='text-xl font-semibold'>Return and Refund</h1>
                        <span className='font-semibold text-gray-800'>Money back guarantee.</span>
                    </div>
                </div>
                <div className='bg-sky-200 px-4 py-8 text-black flex gap-2 items-center justify-center'>
                    <span><MdOutlineRememberMe className='text-4xl' /></span>
                    <div>
                        <h1 className='text-xl font-semibold'>Member Discount</h1>
                        <span className='font-semibold text-gray-800'>Onevery order over $140.00.</span>
                    </div>
                </div>
                <div className='bg-sky-200 px-4 py-8 text-black flex gap-2 items-center justify-center'>
                    <span><BiPhoneCall className='text-4xl' /></span>
                    <div>
                        <h1 className='text-xl font-semibold'>Support 24/7</h1>
                        <span className='font-semibold text-gray-800'>Contact us 24 hours a day.</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;