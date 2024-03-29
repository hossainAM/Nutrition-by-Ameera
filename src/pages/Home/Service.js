import React from 'react';
import { useNavigate } from 'react-router-dom';

const Service = ({service}) => {
    const {id, title, description, price, image} = service;
    const navigate = useNavigate();

    const handleServiceDetail = id => {
        navigate(`/service/${id}`)
    }
    return (
        <>
         <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden transform hover:scale-105 duration-500">
                <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={image} alt="services"/>
                <div className="p-6">
                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">{title}</h2>
                    <p className="title-font text-lg font-medium text-gray-900 mb-3">BDT {price}</p>
                    <p className="leading-relaxed mb-3">{description}</p>
                    <div className="flex items-center flex-wrap ">
                    <button onClick={() => handleServiceDetail(id)} className = "px-4 py-1 bg-green-100 border border-green-200 rounded-full text-sm font-semibold hover:bg-green-200 hover:text-black hover:border-transparent focus:outline-none cursor-pointer" > Book Now
                    </button>
                </div>
            </div>
        </div>
        </>
    );
};

export default Service;
