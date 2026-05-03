import Link from 'next/link';
import React from 'react';

const Category =async () => {
  const res= await fetch('https://lendora-online-book-borrowing-platf.vercel.app/category.json');
  const categories= await res.json();
  // console.log(categories)
  return (
    <div className='flex flex-wrap flex-row  md:flex-col gap-4'>
      {
        categories.map(c=><Link key={c.id}  href={`?category=${c.name.toLowerCase()}`}><div className='flex py-3 px-5 md:px-10 md:text-2xl font-semibold rounded-lg border-2 border-black hover:bg-gray-300 shadow'><p>{c.icon}{" "} </p> <p>{c.name}</p> </div></Link>)
      }
    </div>
  );
};

export default Category;