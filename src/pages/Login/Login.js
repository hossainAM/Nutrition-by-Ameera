import React from 'react';

const Login = () => {
    return (
        <div className='bg-gray-400 h-screen  overflow-y-hidden'>
		<h1 className='text-3xl text-center text-red-700 my-6'>Please Login</h1>
		<div className='flex justify-center mb-3'>
			<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
			Google Sign in
		</button>
		</div>
		<div className="w-full max-w-xs mx-auto">
			<form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
				<div className="mb-4">
				<label className="block text-gray-700 text-sm font-bold mb-2" for="email">
					Email
				</label>
				<input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="email" required/>
				</div>
				<div className="mb-6">
				<label className="block text-gray-700 text-sm font-bold mb-2" for="password">
					Password
				</label>
				<input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" required/>
				<p className="text-red-500 text-xs italic">Please choose a password.</p>
				</div>
				<div className="flex items-center justify-between">
				<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
					Login
				</button>
				<a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
					Forgot Password?
				</a>
				</div>
			</form>
		</div>
		</div>
    );
};

export default Login;