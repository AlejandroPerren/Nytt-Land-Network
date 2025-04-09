import ResponsiveNav from '@/components/NavBar/ResponsiveNavBar';
import React from 'react';

const Page = () => {
  return (
    <div className="bg-gray-700">
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[url('/img/fondo.jpg')] bg-cover bg-top bg-center" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900" />
      </div>

      {/* Navbar */}
      <ResponsiveNav />


      <div className="pt-16" style={{ width: '100vw', height: '100vh' }}>
        <iframe
          src="http://190.244.150.101:8080"
          width="100%"
          height="100%"
          style={{ border: 'none' }}
        />
      </div>
    </div>
  );
};

export default Page;
