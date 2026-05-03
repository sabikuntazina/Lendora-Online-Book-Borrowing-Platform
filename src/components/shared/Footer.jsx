"use client";

import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" bg-gray-950 text-white mt-16">
      
      <div className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8">
        
        {/* 🔹 Logo + Description */}
        <div>
           <Image
                  src={"/logo.png"}
                  alt="logo"
                  loading="eager"
                  width={30}
                  height={30}
                  className="object-cover h-auto w-auto"
                />
                <Link href={'/'}>
                
          <h2 className="text-2xl font-bold mb-3"> Lendora</h2>
                </Link>
          <p className="text-sm text-purple-200">
            Discover, explore, and borrow your favorite books anytime. 
            Lendora makes reading simple and enjoyable.
          </p>
        </div>

        {/* 🔹 Navigation Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-purple-200">
            <li>
              <Link href="/" className="hover:text-white transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/allbooks" className="hover:text-white transition">
                All Books
              </Link>
            </li>
            <li>
              <Link href="/myprofile" className="hover:text-white transition">
                My Profile
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
          
          <p className="flex items-center gap-2 text-purple-200 text-sm">
            <FaEnvelope /> contact@lendora.com
          </p>

          <div className="flex gap-4 mt-4 text-xl">
            <a href="#" className="hover:text-gray-300 transition">
              <FaFacebook />
            </a>
            <a href="#" className="hover:text-gray-300 transition">
              <FaGithub />
            </a>
            <a href="#" className="hover:text-gray-300 transition">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>


      <div className="text-center text-sm text-purple-300 border-t border-purple-600 py-4">
        © {new Date().getFullYear()} Lendora. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;