
import ResponsiveNav from '@/components/NavBar/ResponsiveNavBar';
import React from 'react';

const Page = () => {
  return (
    <div className='bg-gray-700'>
    <ResponsiveNav/>
    <div className='pt-15' style={{ width: '100vw', height: '100vh' }}>
      <iframe
        src="https://earthmc.net/map/"
        width="100%"
        height="100%"
        style={{ border: 'none' }}
      />
        </div>
    </div>
  );
};

export default Page;
