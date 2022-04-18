import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Spinner from '../../shared/Spinner';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();

    let errorElement;

     if(loading){
       return <Spinner></Spinner>
   }

    if (error) {
      errorElement =
        <p>Error:{error?.message}</p>
  }
    if (user) {
       navigate('/home')
    }

    return (
        <>
         <h1 className='text-center mb-2'>.................Or.................</h1>
         <div className='flex justify-center mb-3'>
			<button  onClick={() => signInWithGoogle()} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
			Google Sign in
		    </button>
            <p className='text-red-500'>{errorElement}</p>
		</div>
        </>
    );
};

export default SocialLogin;