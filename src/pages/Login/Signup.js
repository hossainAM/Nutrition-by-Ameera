import React, { useRef } from 'react';
import { useCreateUserWithEmailAndPassword, useSendEmailVerification, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Footer from '../../shared/Footer/Footer';
import Header from '../../shared/Header/Header';

const Signup = () => {
	const nameRef = useRef('');
	const emailRef = useRef('');
    const passwordRef = useRef('');

	 //Sent email verification
	 const [sendEmailVerification, sending, VerificationError] = useSendEmailVerification(auth);

	const [
		createUserWithEmailAndPassword,
		user,
		loading,
		error,
	] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});

	//update profile
	const [updateProfile, updating, UpdateError] = useUpdateProfile(auth);

	const navigate = useNavigate();
	const handleLogIn = e => {
		navigate('/login')
	}

	 if (user) {
	 	console.log('user', user);
	 }

	//Sign Up
	const handleSubmit = async (e) => {
		e.preventDefault();
		const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
		//Create user
		await createUserWithEmailAndPassword(email, password)
		//Update profile
		 await updateProfile({ displayName: name });
          navigate('/home')
	}
    return (
		<>
		<Header></Header>
        <div className='bg-gray-400 h-screen  overflow-y-hidden'>
		<h1 className='text-3xl text-center text-red-700 my-6'>Sign Up</h1>
		<div className='flex justify-center mb-3'>
		</div>
		<div className="w-full max-w-xs mx-auto">
			<form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
				<div className="mb-4">
				<label className="block text-gray-700 text-sm font-bold mb-2" for="name">
					Name
				</label>
				<input ref={nameRef} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Name" required/>
				</div>
				<div className="mb-4">
				<label className="block text-gray-700 text-sm font-bold mb-2" for="email">
					Email
				</label>
				<input ref={emailRef} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="email" required/>
				</div>
				<div className="mb-6">
				<label className="block text-gray-700 text-sm font-bold mb-2" for="password">
					Password
				</label>
				<input ref={passwordRef} className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" required/>
				<p className="text-red-500 text-xs italic">Please choose a password.</p>
				</div>
				<div className=" mb-6">
				<div className="md:w-1/3"></div>
				<label className="md:w-2/3 block text-gray-500 font-bold">
				<input className="mr-2 leading-tight" type="checkbox"/>
				<span className="text-sm">
					Already Registered? <Link to='/login' onClick={handleLogIn} className='text-blue-500'>Please Login!!</Link>
				</span>
				</label>
				</div>
				<div className="flex items-center justify-between">
				<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
					Sign Up
				</button>
				</div>
			</form>
		</div>
		</div>
		<Footer></Footer>
		</>
    );
};

export default Signup;