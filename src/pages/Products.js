import React from 'react';
import products from '../data'
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <section className='section container mx-auto'>
     <h2 className='text-3xl mb-4 text-center'>Products</h2>
      <div className='products text-center'>
        {products.map((product) => (
            <div className='product bg-slate-700 p-4 mb-2 text-white w-[200px] mx-auto' key={product.id}>
              <h5 className='product-title font-bold mb-4'>{product.name}</h5>
              <Link className='btn bg-white text-black font-bold hover:bg-slate-200 px-4 p-2 rounded' to={`/products/${product.id}`}>More info</Link>
            </div>
          ))}
      </div>
    </section>
  );
};

export default Products;
