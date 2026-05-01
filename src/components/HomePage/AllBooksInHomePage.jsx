import { getAllBooks } from '@/lib/method';
import React from 'react';
import BookCard from './BookCard';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';

const AllBooksInHomePage =async () => {
const allBooks= await getAllBooks();
console.log(allBooks)

  return (
    <div className='my-10 space-y-8'>
      <h2 className='font-bold text-3xl'>All Books</h2>
      <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-4'>

      {
        allBooks.slice(0,4).map(book=> <BookCard key={book.id} book={book} ></BookCard>)
      }
      </div>
<div className='flex justify-center items-center'>

      <Link href={'/allbooks'}><button className='btn bg-linear-to-r from-purple-400 to-orange-800 font-bold md:text-xl text-white px-6 py-2 rounded-lg'>See More <FaArrowRight /></button></Link>
</div>
    </div>
  );
};

export default AllBooksInHomePage;