"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import PostForm from "@/components/Admin/FormPost";
import PostList from "@/components/Admin/GetPost";
import { useAuth } from "@/hooks/useAuth";

export default function AdminPage() {
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  if (!isAuthenticated) {
    return (
      <div className="h-screen flex justify-center items-center">
        <p className="text-center text-lg font-semibold">Redirigiendo...</p>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen flex flex-col justify-center p-6 bg-gray-100">
      <div className="absolute inset-0 bg-[url('/img/background.png')] bg-cover bg-center opacity-50"></div>
      <div className="absolute inset-0 bg-black opacity-40"></div>
      
      <div className="relative z-10 w-full max-w-4xl mx-auto">
        <h1 className="text-center text-3xl font-bold text-white mb-6" data-aos="fade-down">Administración de Posts</h1>
        
        <div data-aos="fade-up">
          <PostForm />
        </div>
        
        <h2 className="text-center text-2xl font-semibold text-white mt-8" data-aos="fade-up">Lista de Publicaciones</h2>
        <div data-aos="fade-up">
          <PostList />
        </div>
      </div>
    </div>
  );
}
