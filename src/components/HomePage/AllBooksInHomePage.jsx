import { getAllBooks } from '@/lib/method';
import React from 'react';
import BookCard from './BookCard';

const AllBooksInHomePage =async () => {
const allBooks= await getAllBooks();
console.log(allBooks)

  return (
    <div>
      <h2 className='font-bold text-3xl'>All Books</h2>
      {
        allBooks.map(book=> <BookCard key={book.id} book={book} ></BookCard>)
      }
    </div>
  );
};

export default AllBooksInHomePage;