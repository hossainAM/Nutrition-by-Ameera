import React from 'react';
import banner from '../../images/cover-photo.png'

const Banner = () => {
    return (
        <div className='grid lg:grid-cols-2'>
            <div>
                <img src={banner} alt="banner" />
            </div>
            <div className='bg-green-500 flex flex-col justify-center'>
                <div className='text-5xl text-white text-center space-y-4'>
                    <h1>Change the</h1>
                    <h1>Way You Think</h1>
                    <h1>About Food</h1>
                </div>
                <p className='text-2xl text-white text-center m-6'>Nutrition by Ameera is a wellness nutrition private practice specializing in pediatrics, adult and family nutrition. From digestive health to eating disorders to daily nutrition, Nutrition by Ameera walks alongside you in your pursuit of total health. Set up an appointment today!</p>
                <button className='w-1/3 mx-auto my-12 px-4 py-1 bg-green-100 border border-green-200 rounded-full text-sm font-semibold hover:bg-green-200 hover:text-black hover:border-transparent focus:outline-none'>Set Up an Appointment</button>
            </div>
        </div>
    );
};

export default Banner;