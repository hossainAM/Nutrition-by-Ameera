import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../shared/Header/Header';

const Checkout = () => {
    const nameRef = useRef('');
    const emailRef = useRef('');
    const phoneRef = useRef('');
    const locationRef = useRef('');
    const bookingRef = useRef('');
    const findUsRef = useRef('');

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const phoneNumber = phoneRef.current.value;
        const location = locationRef.current.value;
        const booking = bookingRef.current.value;
        const findUs = findUsRef.current.value;
        console.log(name, email, phoneNumber, location, booking, findUs)

        navigate('/contactus')
    }
    return (
        <>
        <Header></Header>
            <h1 className='text-3xl text-center mt-20 text-green-500 font-serif'>Book an appointment with us</h1>
            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-1/2 mx-auto">
				<div className="mb-4">
				<label className="block text-gray-700 text-sm font-bold mb-2" for="name">
					Name
				</label>
				<input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Name" required/>
				</div>
				<div className="mb-4">
				<label className="block text-gray-700 text-sm font-bold mb-2" for="email">
					Email
				</label>
				<input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="email" required/>
				</div>
				<div className="mb-6">
				<label className="block text-gray-700 text-sm font-bold mb-2" for="phone">
					Phone Number
				</label>
				<input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="phone number" type="number" placeholder="Phone Number" required/>
				</div>
				<div className="mb-6">
				<label className="block text-gray-700 text-sm font-bold mb-2" for="phone">
					Location
				</label>
				<input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="location" type="text" placeholder="Location"/>
				</div>
				<div className="mb-6">
				<label className="block text-gray-700 text-sm font-bold mb-2" for="phone">
					Why are you booking this appointment?
				</label>
				<textarea className='shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline' name="location" id="location" cols="30" rows="10"></textarea>
				</div>
                <div className="mb-6">
				<label className="block text-gray-700 text-sm font-bold mb-2" for="findus">
					How did you find us?
				</label>
				<input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="findus" type="text"/>
				</div>
                 <div className='flex justify-center'>
                        <button className='px-4 py-1 bg-green-100 border border-green-200 rounded-full text-sm font-semibold hover:bg-green-200 hover:text-black hover:border-transparent focus:outline-none'>Send Email</button>
                </div>
			</form>
        </>
    );
};

export default Checkout;