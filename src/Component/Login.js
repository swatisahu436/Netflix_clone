import React, { useState } from 'react';
import Header from '../Component/Header';

const Login = () => {

  const [inSignForm, setInSignForm] = useState(true);

  const toggleSignForm = () => {
    setInSignForm(!inSignForm);
  };
  return (
    <div>
      <Header />
      <div className='absolute'>
        <img
          src='https://assets.nflxext.com/ffe/siteui/vlv3/655a9668-b002-4262-8afb-cf71e45d1956/5ff265b6-3037-44b2-b071-e81750b21783/IN-en-20240715-POP_SIGNUP_TWO_WEEKS-perspective_WEB_c6d6616f-4478-4ac2-bdac-f54b444771dd_large.jpg'
          alt='logo'/>
      </div>
      <form className='absolute  p-12 w-3/12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80'>
        <h1 className='font-bold text-3xl py-4'>
          {inSignForm ? "Sign In" : "Sign up"}</h1>

        {!inSignForm && (
          <input type='text' placeholder='Username'
            className='p-3 my-4 w-full border border-sky-500 rounded-sm bg-gray-800 text-white' />
        )}
        <input type="text" placeholder="Email or Mobie Number"
          className='p-3 my-4 w-full border border-sky-500   rounded-sm bg-gray-800 text-white' />

        <input type='passward' placeholder='Passward'
          className='p-3 my-4 w-full border border-sky-500 rounded-sm bg-gray-800 text-white' />

        <button className=' cursor-pointer  py-4 my-4 bg-red-600 w-full rounded-sm'>{inSignForm ? "Sign In" : "Sign up"}</button>
        <p className='py-4 cursor-pointer' onClick={toggleSignForm}>
        {inSignForm ? "already a User? Sign In" : "New user to Netflix? Sign up Now"}</p>
      </form>
    </div>
  );


};

export default Login;