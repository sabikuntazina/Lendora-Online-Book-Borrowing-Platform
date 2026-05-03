"use client";

import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { FaBookOpen } from "react-icons/fa";

const BorrowButton = () => {
  const router = useRouter();

  const handleBorrow = () => {
    toast.success("You have successfully borrowed this book 📚");
    
    setTimeout(() => {
      router.push("/thankyou");
    }, 1500);
  };

  return (
    <button
      onClick={handleBorrow}
      className="btn bg-gradient-to-r from-purple-400 to-orange-500 font-bold md:text-xl text-white px-6 py-2 rounded-lg"
    >
      <FaBookOpen /> Borrow This Book
    </button>
  );
};

export default BorrowButton;