import BookCard from '@/components/HomePage/BookCard';
import { getAllBooks } from '@/lib/method';

const AllBooksPage = async() => {
  const allBooks= await getAllBooks();
  // console.log(allBooks)
  return (
      <div className='my-10 space-y-8'>
      <h2 className='font-bold text-3xl'>All Books</h2>
      <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-4'>

      {
        allBooks.map(book=> <BookCard key={book.id} book={book} ></BookCard>)
      }
      </div>

    </div>
  );
};

export default AllBooksPage;