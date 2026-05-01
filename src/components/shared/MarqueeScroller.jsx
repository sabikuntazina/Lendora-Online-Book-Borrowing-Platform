import React from 'react';
import Marquee from 'react-fast-marquee';

const marqueeData = [
  {
    id: 1,
    title: "Atomic Habits",
    tag: "New Arrival",
    discount: "20% OFF",
  },
  {
    id: 2,
    title: "The Alchemist",
    tag: "New Arrival",
    discount: "15% OFF",
  },
  {
    id: 3,
    title: "Rich Dad Poor Dad",
    tag: "Hot Deal",
    discount: "25% OFF",
  },
  {
    id: 4,
    title: "Deep Work",
    tag: "Limited Offer",
    discount: "30% OFF",
  },
  {
    id: 5,
    title: "Think and Grow Rich",
    tag: "Special Discount",
    discount: "18% OFF",
  },
];
const MarqueeScroller = () => {
  return (
    <div className='flex justify-between items-center py-2 px-4 my-2  bg-purple-200 rounded-lg max-w-7xl mx-auto'>
     
     <Marquee speed={50} pauseOnHover={true}>
  {marqueeData.map((item) => (
    <div
      key={item.id}
      className="mx-6 flex items-center gap-3  px-4 py-2 rounded-full shadow"
    >
      <span className="text-sm font-bold lg:text-lg text-indigo-800">
        {item.tag}
      </span>

      <span className="font-medium text-black lg:text-lg">{item.title}</span>

      <span className="bg-linear-to-r from-purple-500 to-orange-800 text-white text-xs lg:text-sm px-2 py-1 rounded">
        {item.discount}
      </span>
    </div>
  ))}
</Marquee>
    </div>
  );
};

export default MarqueeScroller;