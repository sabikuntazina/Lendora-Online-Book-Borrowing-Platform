
import BorrowButton from '@/components/BorrowButton';
import { getAllBooks } from '@/lib/method';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaBookOpen } from 'react-icons/fa';

export const generateMetadata = async ({ params }) => {
  const { id } = await params;
 const allBooks= await getAllBooks();
  const bookDetails=allBooks.find(book=> book.id==id)

  return {
    title: bookDetails.title,
    description: bookDetails.description,
  };
};

const BookDetailsPage =async ({params}) => {
  const {id} =await params;
 const allBooks= await getAllBooks();
  const bookDetails=allBooks.find(book=> book.id==id)

  

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-100 py-16 px-4">
      
      <div className="max-w-6xl mx-auto bg-white/80 backdrop-blur-lg shadow-2xl rounded-3xl p-6 md:p-10 grid md:grid-cols-2 gap-10 items-center">

        {/* 📚 Image Section */}
        <div className="flex justify-center">
          <Image
            src={bookDetails.image_url}
            alt={bookDetails.title}
            width={400}
            height={500}
            className="rounded-2xl shadow-lg hover:scale-105 transition duration-300 object-cover"
          />
        </div>

        {/* 📖 Details Section */}
        <div className="space-y-5">

          {/* Title */}
          <h1 className="text-3xl md:text-5xl font-bold text-purple-700 flex items-center gap-3">
            {bookDetails.title}
            <FaBookOpen className="text-purple-500" />
          </h1>

          {/* Badge */}
          {bookDetails.badge && (
            <div className={`inline-block px-4 py-1 rounded-full text-sm font-semibold 
              ${bookDetails.badge === "Popular" 
                ? "bg-purple-200 text-purple-800" 
                : "bg-pink-200 text-pink-800"}`}>
              {bookDetails.badge}
            </div>
          )}

          {/* Author */}
          <p className="text-lg text-gray-600">
            ✍️ <span className="font-semibold">{bookDetails.author}</span>
          </p>

          {/* Description */}
          <p className="text-gray-700 leading-relaxed text-lg">
            {bookDetails.description}
          </p>

          {/* Info Box */}
          <div className="bg-purple-50 rounded-xl p-4 space-y-2 border border-purple-100">
            <p className="text-gray-800 font-medium">
              📂 Category: <span className="font-semibold">{bookDetails.category}</span>
            </p>
            <p className="text-gray-800 font-medium">
              📦 Available: 
              <span className="ml-1 font-bold text-purple-700">
                {bookDetails.available_quantity}
              </span>
            </p>
          </div>

          {/* CTA */}
          <div className="pt-4">
            <BorrowButton />
          </div>

        </div>
      </div>
    </div>
  );
};

export default BookDetailsPage;