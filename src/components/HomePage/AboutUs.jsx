'use client'
import { useEffect, useRef } from "react";
import aboutUs from '../../assets/Aboutus.avif'
import Image from "next/image";

const AboutUs = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const elements = sectionRef.current.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-white dark:bg-slate-900">
      <div className="">

        {/* Header */}
        <div className="text-center mb-16 reveal">
          <h2 className="text-3xl md:text-4xl font-bold mt-2 relative inline-block">
           About Our Platform
            <span className="block w-16 h-1 bg-linear-to-r from-indigo-500 to-cyan-400 mx-auto mt-2 rounded"></span>
          </h2>
        </div>

        {/* Content */}
        <div className="flex flex-col lg:flex-row justify-between gap-10 items-center">

          {/* Image */}
          <div className="flex justify-center reveal">
            <div className="w-[280px] h-[360px] rounded-2xl overflow-hidden shadow-xl bg-linear-to-br from-indigo-500 to-purple-500 p-1 hover:scale-105 transition duration-500">
              <Image
              src={aboutUs}
              alt="about us"
              className="w-full h-full object-cover rounded-2xl"
              
              ></Image>
            </div>
          </div>

          {/* Text */}
          <div className="lg:ml-30 space-y-3 px-10">
            <h3 className="text-2xl font-semibold">
              Who We Are
            </h3>

            <p className="text-gray-600 leading-relaxed">
              Our platform is designed to make reading more accessible and enjoyable.
              We provide a seamless system where users can explore, borrow, and manage books easily.
              Whether you re a student, a casual reader, or a book lover, our goal is to connect you
              with your next favorite book.
            </p>

            {/* Features */}
            <div className="grid sm:grid-cols-2 gap-4 mb-6 text-xl">

              <div className="flex items-center gap-3 ">
                <div className="w-12 h-12 flex items-center justify-center bg-gray-100 dark:bg-slate-800 rounded-lg text-indigo-500">
                  📚
                </div>
                <span><b>Extensive Collection</b></span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 flex items-center justify-center bg-gray-100 dark:bg-slate-800 rounded-lg text-indigo-500">
                  ⚡
                </div>
                <span><b>Easy Borrow System</b></span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 flex items-center justify-center bg-gray-100 dark:bg-slate-800 rounded-lg text-indigo-500">
                  🔍
                </div>
                <span><b>Smart Search</b></span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 flex items-center justify-center bg-gray-100 dark:bg-slate-800 rounded-lg text-indigo-500">
                  👤
                </div>
                <span><b>User Dashboard</b></span>
              </div>

            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 border-t pt-6">
              <div className="text-center px-6 flex flex-col py-4 rounded-lg  border-2 border-purple-600 hover:bg-gray-300 shadow">
                <h4 className="text-3xl font-bold text-indigo-500">500+</h4>
                <p className="text-lg text-black font-semibold">Books Available</p>
              </div>

              <div className="text-center px-6 flex flex-col py-4 rounded-lg  border-2 border-purple-600 hover:bg-gray-300 shadow">
                <h4 className="text-3xl font-bold text-indigo-500">100+</h4>
                <p className="text-lg text-black font-semibold">Active Users</p>
              </div>

              <div className="text-center px-10 flex flex-col py-4 rounded-lg  border-2 border-purple-600 hover:bg-gray-300 shadow">
                <h4 className="text-3xl font-bold text-indigo-500">24/7</h4>
                <p className="text-lg text-black font-semibold">Access</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;