import React, { useEffect, useRef } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import toast, { Toaster } from 'react-hot-toast';
import SocialLogin from './SocialLogin';

const Login = () => {
	const emailRef = useRef('');
    const passwordRef = useRef('');
	const navigate = useNavigate();
	const location = useLocation();

	const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth); //Reset password

	const [
		signInWithEmailAndPassword,
		user,
		loading,
		error,
	] = useSignInWithEmailAndPassword(auth);

	let from = location.state?.from?.pathname || "/";

	const handleSignIn = (e) => {
		e.preventDefault();
		const email = emailRef.current.value;
		const password = passwordRef.current.value;
		signInWithEmailAndPassword(email, password)
	}
	 let errorElement;

    if (error) {
      errorElement = <p>Error: {error?.message}</p>
    }

	useEffect(() => {
		if(user) {
		navigate(from, {
			replace: true
		});
	}
	}, [from, navigate, user])

	const handleSignUp = e => {
		navigate('/signup')
	}

	 //Reset Password
	    const handlePasswordReset = async () => {
        const email = emailRef.current.value;
        if(email){
              await sendPasswordResetEmail(email);
              toast('Sent email');
        }
        else{
            toast('Please Provide your Email Address')
        }
    }

    return (
        <div className='bg-gray-400 h-screen  overflow-y-hidden'>
		<h1 className='text-3xl text-center text-red-700 my-6'>Please Login</h1>
		<div className="w-full max-w-xs mx-auto">
			<form onSubmit={handleSignIn} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
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
				<p className='text-gray-700 font-bold text-sm mt-2'>New to Nutrition by Ameera? <Link className='text-blue-500 hover:text-blue-800' to="/signup" onClick={handleSignUp}>Sign Up</Link></p>
				</div>
				<div className="flex items-center justify-between">
				<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
					Login
				</button>
				</div>
				<p className='inline-block align-baseline font-bold text-sm ml-5'>Forgot Password? <button onClick={handlePasswordReset} className='text-blue-500 hover:text-blue-800'>Reset Password</button></p>
				<p className='text-red-500 text-center mt-2'>{errorElement}</p>
				<Toaster/>
			</form>
				<SocialLogin></SocialLogin>
		</div>
		</div>
    );
};

export default Login;