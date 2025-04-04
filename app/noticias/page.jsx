import PostList from "@/components/Admin/GetPost";
import ResponsiveNav from "@/components/NavBar/ResponsiveNavBar";
import React from "react";

const page = () => {
  return (
    <div className="relative min-h-screen">
        <ResponsiveNav/>
      <div className="absolute inset-0 bg-[url('/img/background.png')] bg-cover bg-center opacity-80 z-0"></div>
      <div className="relative z-10 px-6 py-12 max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-white text-center mb-8 drop-shadow-lg">
          Lista de Noticias
        </h1>

        <div className="bg-white bg-opacity-90 rounded-2xl shadow-lg p-6">
          <PostList />
        </div>
      </div>
    </div>
  );
};

export default page;
