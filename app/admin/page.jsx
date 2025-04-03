"use client";
import PostForm from "@/components/Admin/FormPost";
import PostList from "@/components/Admin/GetPost";
import { useAuth } from "@/hooks/useAuth";

export default function AdminPage() {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <p className="text-center text-lg font-semibold">Redirigiendo...</p>;
  }

  return (
    <div className="relative min-h-screen flex flex-col items-center p-6 ">
      <div className="absolute inset-0 bg-[url('/img/background.png')] bg-cover bg-center opacity-80"></div>
      <div className="z-10 w-full max-w-3xl">
        <PostForm />
        <PostList />
      </div>
    </div>
  );
}
