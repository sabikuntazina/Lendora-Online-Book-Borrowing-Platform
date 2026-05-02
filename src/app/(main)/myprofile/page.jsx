'use client'
import UpdateProfileModal from '@/components/UpdateProfileModal';
import { authClient } from '@/lib/auth-client';
import Image from 'next/image';
import React from 'react';


const getInitial = (name) => {
  return name?.charAt(0)?.toUpperCase();
};

const MyProfilePage = () => {
    const userData = authClient.useSession();
  const user= userData.data?.user;

  return (
<div className="card bg-base-100  py-10 my-10 lg:my-15 shadow-sm">
  <figure className="px-10 pt-10">
 {user?.image ? (
  <Image
    src={user.image}
    alt="user-logo"
    height={100}
    width={100}
    className="rounded-full"
  />
) : (
  <div className="w-[100px] h-[100px] rounded-full bg-primary text-white flex items-center justify-center text-3xl font-bold">
    {getInitial(user?.name)}
  </div>
)}
  </figure>
  <div className="card-body space-y-2 items-center text-center">
    <h2 className="font-semibold text-xl">{user?.name}</h2>
    <p className='font-semibold text-xl text-gray-700'>{user?.email}</p>
    <div className="card-actions">
      <UpdateProfileModal></UpdateProfileModal>
    </div>
  </div>
</div>
  );
};

export default MyProfilePage;