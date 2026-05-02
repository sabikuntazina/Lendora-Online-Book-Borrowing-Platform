'use client'

import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

const SearchBar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  const [text, setText] = useState(searchParams.get('search') || '');

  const handleSearch = (value) => {
    const params = new URLSearchParams(searchParams.toString());

    if (value.trim()) {
      params.set('search', value.toLowerCase());
    } else {
      params.delete('search');
    }

   
router.push(`${pathname}?${params.toString()}`);
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setText(value);
    handleSearch(value);
  };

  return (
    <div className="flex gap-2 mb-6">
      <input
        type="text"
        value={text}
        onChange={handleChange}
        placeholder="Search by book name..."
        className="input input-bordered w-full max-w-xl"
      />

      <button
        onClick={() => handleSearch(text)}
        className="btn btn-primary"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;