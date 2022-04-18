import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Header from '../../shared/Header/Header';

const ServiceDetails = () => {
    const { serviceId } = useParams();
    return (
        <>
        <Header></Header>
        <div className='flex justify-center mt-80'>
            <Link to="/checkout">
                <button className='px-4 py-1 bg-green-100 border border-green-200 rounded-full text-sm font-semibold hover:bg-green-200 hover:text-black hover:border-transparent focus:outline-none'>Checkout</button>
            </Link>
        </div>
        </>
    );
};

export default ServiceDetails;