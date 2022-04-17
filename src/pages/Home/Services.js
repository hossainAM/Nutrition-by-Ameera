import React, { useEffect, useState } from 'react';
import Service from './Service';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setServices(data))
    }, []);
    // console.log(services)
    return (
        <>
            <div className='my-16'>
                <h1 className='text-3xl text-green-500 mb-6'>Choose Your Preferred Package</h1>
                <div className='grid sm:grid-cols-3 gap-5'>
                    {
                        services.map(service => <Service key={service.id} service={service}></Service>)
                    }
                </div>
            </div>
        </>
    );
};

export default Services;