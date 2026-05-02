import Category from '@/components/Category';
import BookCard from '@/components/HomePage/BookCard';
import SearchBar from '@/components/SearchBar';
import { getAllBooks } from '@/lib/method';

const AllBooksPage = async({searchParams}) => {
 const { category, search } =await searchParams;
  // console.log(category)
  const allBooks= await getAllBooks();

 let filteredBooks =
  !category || category === "all"
    ? allBooks
    : allBooks.filter(
        (book) => book.category.toLowerCase() === category.toLowerCase()
      );
  if (search) {
    filteredBooks = filteredBooks.filter((book) =>
      book.title.toLowerCase().includes(search.toLowerCase())
    );
  }
  return (
      <div className='my-10 space-y-8 px-5'>
      <h2 className='font-bold text-3xl'>All Books</h2>
      <SearchBar></SearchBar>
      <div className='flex flex-col lg:flex-row justify-between gap-16 '>
<div  >

      <Category></Category>
</div>
      <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-4'>

      {
        filteredBooks.map(book=> <BookCard key={book.id} book={book} ></BookCard>)
      }
      </div>
      </div>

    </div>
  );
};

export default AllBooksPage;