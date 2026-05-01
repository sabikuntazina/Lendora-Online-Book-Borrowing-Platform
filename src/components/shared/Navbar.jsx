'use client'
import React from 'react';
import userPic from '@/assets/user.png'
import NavLink from './Navlink';
import Image from 'next/image';
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';


const Navbar = () => {
  
const userData = authClient.useSession();
// console.log(userData)
const user= userData.data?.user;
const handleSignOut=async()=>{
await authClient.signOut();
}

  const links=<>
  <NavLink href={'/'}><li>Home</li></NavLink>
  <NavLink href={'/allbooks'}><li>All Books</li></NavLink>
  <NavLink href={'/myprofile'}><li>Profile</li></NavLink>
  </>
  return (
    <div className='bg-base-100 shadow-sm'>

   <div className="navbar max-w-7xl mx-auto ">
    
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 space-y-3 rounded-box z-1 mt-3 w-52 p-2 shadow">
       {links}
      </ul>
    </div>
       <Image
            src={"/logo.png"}
            alt="logo"
            loading="eager"
            width={30}
            height={30}
            className="object-cover h-auto w-auto"
          />
    <a className=" ml-2 font-extrabold text-xl">Lendora</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal space-x-4 px-1 text-lg">
      {links}
    </ul>
  </div>
  <div className="navbar-end">

    {
      user? (
         <div className='space-x-4 flex items-center'>
          <h2>{user.name}</h2>
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
        <Image src={user.image} alt='user-logo' height={40} width={40} ></Image>
        </div>
      </div>
      <Link className='btn bg-gray-800 text-white font-bold px-4' href={'/signin'}><button onClick={handleSignOut}>Signout</button></Link>
      </div>
      ) :
      (
         <div className='space-x-4'>
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
        <Image src={userPic} alt='user-logo' height={30} width={40} ></Image>
        </div>
      </div>
      <Link className='btn bg-gray-800 text-white font-bold px-4' href={'/signin'}><button>Signin</button></Link>
      </div>
      )
    }
  </div>
</div>
    </div>
    
  );
};

export default Navbar;