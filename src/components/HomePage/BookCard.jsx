
import Image from 'next/image';
import React from 'react';


const BookCard = ({book}) => {

  return (
  <div className="card bg-base-100  shadow-sm">
  <figure>
   <Image 
   src={book.image_url}
    alt={book.category} 
    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
    height={100} 
    width={400}
    className='object-cover rounded-xl'
    >
  
   </Image>
  </figure>
  <div className="card-body space-y-3">
    <h2 className="card-title">
      {book.title}
      {
        book.badge &&
        <div className={`badge ${book.badge==="Popular" ? 'badge-info text-white' : 'badge-secondary'} `}>{book.badge}</div> 
      }
    </h2>
    <h1 className='text-lg font-semibold'> {book.author}</h1>
    <div className="card-actions justify-end">
      <button className="btn w-full btn-outline rounded-lg text-lg font-semibold">Details</button>
    </div>
  </div>
</div>
  );
};

export default BookCard;