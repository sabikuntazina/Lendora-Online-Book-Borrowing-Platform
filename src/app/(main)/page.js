import AllBooksInHomePage from "@/components/HomePage/AllBooksInHomePage";
import Banner from "@/components/HomePage/Banner";
import MarqueeScroller from "@/components/shared/MarqueeScroller";
import Image from "next/image";

export default function Home() {
  return (
<div>
     <Banner></Banner>
      <MarqueeScroller></MarqueeScroller>
      <AllBooksInHomePage></AllBooksInHomePage>
</div>
  );
}
