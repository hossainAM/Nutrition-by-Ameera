import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetails = () => {
    const { serviceId } = useParams();
    return (
        <div>
            <Link to="/checkout">
                <button className='px-4 py-1 bg-green-100 border border-green-200 rounded-full text-sm font-semibold hover:bg-green-200 hover:text-black hover:border-transparent focus:outline-none absolute bottom-1/4  left-96'>Checkout</button>
            </Link>
        </div>
    );
};

export default ServiceDetails;