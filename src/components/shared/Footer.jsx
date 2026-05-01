import Image from 'next/image';
import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
   <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10 max-w-7xl mx-auto">
  <aside>
   
    <p className='flex justify-center items-center gap-3'>
        <Image
                  src={"/logo.png"}
                  alt="logo"
                  loading="eager"
                  width={30}
                  height={30}
                  className="object-cover h-auto w-auto"
                />
     <h1 className='font-bold '>Lendora </h1>  
      <br />
    </p>
     <h3>Your Online Book Borrowing Platform </h3> 
  </aside>
  <nav>
    <h6 className="footer-title">Contact Us</h6>
    <div className="grid grid-flow-col gap-4">
     
    
        <button 
         
          className=" btn btn-outline h-12 w-12 rounded-full text-2xl">
          <FaTwitter />
        </button>
        <button 
         
          className=" btn btn-outline rounded-full h-12 w-12 text-2xl">
          <FaInstagram />
        </button>
        <button 
         
          className=" btn btn-outline h-12 w-12 rounded-full text-2xl">
         <FaFacebookF />
        </button>

    
    </div>
  </nav>
</footer>
  );
};

export default Footer;