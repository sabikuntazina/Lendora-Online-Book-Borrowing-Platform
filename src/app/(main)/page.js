import AboutUs from "@/components/HomePage/AboutUs";
import AllBooksInHomePage from "@/components/HomePage/AllBooksInHomePage";
import Banner from "@/components/HomePage/Banner";
import BookRatingsSection from "@/components/HomePage/BookRatingsSection";
import MarqueeScroller from "@/components/shared/MarqueeScroller";
import { getAllBooks } from "@/lib/method";
import Image from "next/image";

export default async function Home() {
  const books= await getAllBooks()
  return (
<div>
     <Banner></Banner>
      <MarqueeScroller></MarqueeScroller>
      <AllBooksInHomePage></AllBooksInHomePage>
      <AboutUs></AboutUs>
      <BookRatingsSection books={books}></BookRatingsSection>
</div>
  );
}
