  export const getAllBooks= async()=>{
      const res= await fetch('https://lendora-online-book-borrowing-platf.vercel.app/data.json');
  const allBooks= await res.json();
 return allBooks;
  }
