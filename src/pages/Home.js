import React from 'react';
import {Link} from "react-router-dom";

const Home = () => {
  return (
    <div className='mx-auto w-fit'>
      <h2 className='text-3xl mb-4'>Home component</h2>
      <Link to='/about' className='btn bg-indigo-800 text-white p-2'>About</Link>
    </div>
  );
};

export default Home;
