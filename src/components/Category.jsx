import Link from 'next/link';
import React from 'react';

const Category =async () => {
  const res= await fetch('https://lendora-online-book-borrowing-platf.vercel.app/category.json');
  const categories= await res.json();
  // console.log(categories)
  return (
    <div>
      {
        categories.map(c=><Link key={c.id} href={`?category=${c.name.toLowerCase()}`}><span className='btn rounded-xl text-lg btn-soft btn-primary mr-3' >{c.icon}{" "} {c.name}</span></Link>)
      }
    </div>
  );
};

export default Category;