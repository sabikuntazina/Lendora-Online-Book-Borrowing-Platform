import Category from '@/components/Category';
import BookCard from '@/components/HomePage/BookCard';
import { getAllBooks } from '@/lib/method';

const AllBooksPage = async({searchParams}) => {
  const {category}= await searchParams;
  // console.log(category)
  const allBooks= await getAllBooks();

 const filteredBooks =
  !category || category === "all"
    ? allBooks
    : allBooks.filter(
        (book) => book.category.toLowerCase() === category.toLowerCase()
      );
  return (
      <div className='my-10 space-y-8'>
      <h2 className='font-bold text-3xl'>All Books</h2>
      <Category></Category>
      <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-4'>

      {
        filteredBooks.map(book=> <BookCard key={book.id} book={book} ></BookCard>)
      }
      </div>

    </div>
  );
};

export default AllBooksPage;