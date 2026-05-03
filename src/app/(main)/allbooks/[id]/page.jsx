
import BorrowButton from '@/components/BorrowButton';
import { getAllBooks } from '@/lib/method';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaBookOpen } from 'react-icons/fa';
import { toast } from 'react-toastify';

const BookDetailsPage =async ({params}) => {
  const {id} =await params;
 const allBooks= await getAllBooks();
  const bookDetails=allBooks.find(book=> book.id==id)

  

  return (
   <div className="hero bg-base-200 min-h-screen my-10">
  <div className="hero-content flex-col lg:flex-row md:space-x-20">
    <Image
    src={bookDetails.image_url}
    alt={bookDetails.category}
    height={300}
    width={400}
    >

    </Image>
    <div className='space-y-4'>
      <h1 className="text-5xl font-bold flex items-center gap-4"><span>{bookDetails.title}  </span><FaBookOpen /></h1>
        {
        bookDetails.badge &&
        <div className={`badge font-semibold md:text-lg md:py-2 text-black ${bookDetails.badge==="Popular" ? 'badge-info' : 'badge-secondary'} `}>{bookDetails.badge}</div> 
      }
      <h3 className='md:text-2xl font-semibold'>{bookDetails.author}</h3>
      <p className="md:text-xl text-gray-700">
       {bookDetails.description}
      </p>
      <p className="md:text-xl text-gray-800 font-semibold">Category: 
       {bookDetails.category}
      </p>
            <h3 className='md:text-lg text-gray-800 font-semibold'>Available Quantity:  {bookDetails.available_quantity}</h3>
            
        <Link href={'/thankyou'}> 
        
     <BorrowButton></BorrowButton>
        </Link>  
    </div>
  </div>
</div>
  );
};

export default BookDetailsPage;