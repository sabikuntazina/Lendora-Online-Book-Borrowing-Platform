import React from 'react';
import img from '../../assets/banner1.webp'

const Banner = () => {
  return (
    <div className="relative bg-[url('https://graysonsproperties.co.uk/wp-content/uploads/2024/07/books.jpg')] h-[60vh] max-w-7xl mx-auto bg-cover bg-no-repeat bg-center flex items-center rounded-xl shadow-2xl">
       <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-white p-10 space-y-8 text-center">
    <h1 className="text-4xl lg:text-6xl font-bold">Find Your Next Read</h1>
    <div className='space-x-4'>

    <button className="md:text-xl outline-none bg-linear-to-r from-purple-500 to-orange-800 font-bold text-white px-6 py-2 rounded-lg">
 Browse Now
</button>
    <button className="md:text-xl btn-outline btn font-bold text-white px-6 py-2 rounded-lg">
 Membership
</button>
    </div>
  </div>
    </div>
  );
};

export default Banner;