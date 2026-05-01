import Banner from '@/components/HomePage/Banner'
import React from 'react';

const MainLayout = ({children}) => {
  return (
    <div className='max-w-7xl mx-auto'>

      {children}
    </div>
  );
};

export default MainLayout;