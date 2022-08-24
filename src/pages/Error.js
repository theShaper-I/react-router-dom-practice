import React from 'react';
import {Link} from "react-router-dom";

const Error = () => {
  return (
    <div className='mx-auto mt-20'>
      <h2 className='text-center text-5xl text-red-700'>404</h2>
      <div className='text-center text-6xl text-red-700 mt-4 mb-6'>Error Page...</div>
      <Link to='/' className='btn bg-indigo-800 text-white p-2 rounded'>Back Home</Link>
    </div>
  );
};

export default Error;
