"use client";

import Link from "next/link";
import { CheckCircle } from "lucide-react";
import "animate.css";

export default function ThankYouPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-purple-100 via-purple-50 to-white px-4">
      
      <div className="bg-white shadow-xl rounded-3xl p-8 md:p-12 text-center max-w-xl w-full border border-purple-100 
      animate__animated animate__zoomIn">
        
     
        <div className="flex justify-center mb-6">
          <div className="bg-purple-100 p-4 rounded-full animate__animated animate__bounce animate__delay-1s">
            <CheckCircle className="text-purple-600 w-12 h-12" />
          </div>
        </div>

    
        <h1 className="text-3xl md:text-4xl font-bold text-purple-700 mb-4 
        animate__animated animate__tada  animate__delay-1s">
          Thank You! 📚
        </h1>

   
        <p className="text-gray-600 text-lg mb-6 animate__animated animate__fadeIn animate__delay-2s">
          Your book has been successfully borrowed.  
          Enjoy your reading journey! ✨
        </p>

   
        <div className="bg-purple-50 rounded-xl p-4 mb-6 animate__animated animate__fadeInUp animate__delay-2s">
          <p className="text-sm text-gray-500">
            📦 Please return the book within the due time to avoid any issues.
          </p>
        </div>

  
        <div className="flex flex-col md:flex-row gap-4 justify-center animate__animated animate__fadeInUp animate__delay-3s">
          
          <Link href="/allbooks">
            <button className="px-6 py-3 bg-purple-600 text-white rounded-xl hover:bg-purple-700 transition">
              Browse More Books
            </button>
          </Link>

          <Link href="/">
            <button className="px-6 py-3 border border-purple-300 text-purple-700 rounded-xl hover:bg-purple-100 transition">
              Go Home
            </button>
          </Link>

        </div>
      </div>
    </div>
  );
}