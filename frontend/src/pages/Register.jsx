import axios from 'axios';
import React from 'react';
import { useState } from 'react';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Unlike fetch we don't have to convert the JSON data into strings here using axios
    try {
      await axios.post('http://localhost:1337/register_user', {
        headers: { 'content-type': 'application/json' },
        // this is the body part of the api
        // you don't have to specify it like body:{name} in native fetch
        // method or like header in fetch or like this here even in axios.
        name,
        email,
        password,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='flex flex-col py-1'>
      <h1 className='text-center font-medium py-1 text-2xl'>Register</h1>
      <div className='flex flex-col pt-2'>
        <form
          onSubmit={handleSubmit}
          className='py-4 flex flex-col w-80 h-auto m-auto '
        >
          <input
            type='text'
            placeholder='Username'
            className='border-black border-2 text-center h-8'
            value={name}
            autoFocus
            onChange={(e) => setName(e.target.value)}
          />
          <span className='py-2'>{'*Enter The Username*'}</span>
          <input
            type='email'
            placeholder='Email'
            className='border-black border-2 text-center h-8'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <span className='py-2'>{'*Enter The Email*'}</span>
          <input
            type='password'
            placeholder='Password'
            className='border-black border-2 text-center h-8'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span className='py-2'>{'*Enter The Password*'}</span>
          <button
            type='submit'
            className='border-black border-2 h-7 w-20 mx-auto bg-gradient-to-r from-amber-500 to-pink-600'
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
