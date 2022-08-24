import React from 'react';
import {Link} from "react-router-dom";

const About = () => {
  return (
    <div className='mx-auto w-fit'>
      <h2 className='text-3xl mb-4'>About</h2>
      <Link to='/' className='btn bg-indigo-800 text-white p-2 rounded'>Back Home</Link>
    </div>
  );
};

export default About;
