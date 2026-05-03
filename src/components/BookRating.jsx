import React from 'react';
import BookRatingsSection from './HomePage/BookRatingsSection';
import { getAllBooks } from '@/lib/method';

const BookRating =async () => {
   const books= await getAllBooks()
  return (
    <div>
      <BookRatingsSection books={books}></BookRatingsSection>
    </div>
  );
};

export default BookRating;