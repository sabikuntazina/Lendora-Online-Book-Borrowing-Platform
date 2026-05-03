import React from 'react';
import BookRatingsSection from './HomePage/BookRatingsSection';

const BookRating =async () => {
   const books= await getAllBooks()
  return (
    <div>
      <BookRatingsSection books={books}></BookRatingsSection>
    </div>
  );
};

export default BookRating;