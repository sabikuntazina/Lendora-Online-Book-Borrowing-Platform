"use client";

import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa";

const reviewsText = [
  "Amazing book! Highly recommended 📚",
  "Really enjoyed reading this!",
  "One of the best books I've read recently.",
  "Super helpful and engaging!",
  "You should definitely check this out!"
];

// stable review
const getReviewById = (id) => {
  return reviewsText[id % reviewsText.length];
};

// review count
const getReviewCount = (rating) => {
  return Math.floor(rating * 40);
};

const BookRatingsSection = ({ books }) => {

  // 🔥 SORT by rating (high → low)
  const topBooks = [...books]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 4);

  return (
    <div className="py-16 bg-gradient-to-br from-purple-50 to-white">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-purple-700 mb-10">
        📢 Top Rated Books
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 px-6">
        {topBooks.map((book) => {
          const reviewText = getReviewById(book.id);
          const reviewCount = getReviewCount(book.rating);

          return (
            <div
              key={book.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-5 space-y-4"
            >
              {/* Image */}
              <Image
                src={book.image_url}
                alt={book.title}
                width={300}
                height={200}
                className="rounded-xl w-full h-48 object-cover"
              />

              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-800">
                {book.title}
              </h3>

              {/* Rating */}
              <div className="flex items-center gap-2 text-yellow-500">
                <FaStar />
                <span className="font-bold">{book.rating}</span>
                <span className="text-gray-500 text-sm">
                  ({reviewCount} reviews)
                </span>
              </div>

              {/* Review */}
              <p className="text-gray-600 text-sm italic">
                “{reviewText}”
              </p>

              {/* CTA */}
              <Link href={`/allbooks/${book.id}`}>
                <button className="w-full mt-2 py-2 rounded-lg bg-purple-600 text-white hover:bg-purple-700 transition">
                  Borrow This Book 📖
                </button>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BookRatingsSection;