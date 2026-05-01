import { getAllBooks } from '@/lib/method';
import React from 'react';
import BookCard from './BookCard';

const AllBooksInHomePage =async () => {
const allBooks= await getAllBooks();
console.log(allBooks)

  return (
    <div className=''>
      <h2 className='font-bold text-3xl'>All Books</h2>
      <div className='grid grid-cols-4 gap-4'>

      {
        allBooks.map(book=> <BookCard key={book.id} book={book} ></BookCard>)
      }
      </div>
    </div>
  );
};

export default AllBooksInHomePage;