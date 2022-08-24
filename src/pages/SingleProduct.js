import React from 'react';
import products from "../data";
import { Link, useParams } from "react-router-dom";

const SingleProduct = () => {
  const { productId } = useParams();
  const product = products.find((product) => product.id === productId);
  const { image, name, price } = product;

  return (
    <section className='section product container mx-auto'>
      <div className='product'>
        <h5 className='text-center text-3xl mb-4'>{name}</h5>
        <img className='mx-auto w-[600px] w-[400px] mb-4' src={image} alt={name} />
        <Link to='/products' className='btn bg-indigo-800 text-white p-2'>Back to products</Link>
      </div>
    </section>
  );
};

export default SingleProduct;
