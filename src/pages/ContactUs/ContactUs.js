import React from 'react';
import Header from '../../shared/Header/Header';

const ContactUs = () => {
    return (
        <>
        <Header></Header>
        <section className='bg-green-100 p-4'>
            <h1 className='text-3xl text-center pt-5 text-red-500'>Give Us A Call:</h1>
            <div className='grid sm:grid-cols-2 space-y-6'>
            <div className='text-center space-y-2'>
                <p>Toll-Fee</p>
                <p className='text-2xl font-bold'>888-422-8070</p>
                <p>Local</p>
                <p className='text-2xl font-bold'>972-422-9180</p>
                <p>Fax-Line</p>
                <p className='text-2xl font-bold'>888-821-2292</p>
            </div>
            <div className='text-center space-y-2'>
                <h1 className='text-2xl fond-bold'>Our Location</h1>
                <p>26/1/A, Avenue 5</p>
                <p>Baridhara</p>
                <p>Dhaka</p>
            </div>
            </div>
            <a className='text-red-500 text-2xl flex justify-center' href="#">We also offer virtual/telehealth services. Click to learn more</a>
        </section>
        </>
    );
};

export default ContactUs;