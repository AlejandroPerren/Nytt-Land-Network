"use client";
import PostForm from "@/components/Admin/FormPost";
import PostList from "@/components/Admin/GetPost";
import { useAuth } from "@/hooks/useAuth";

export default function AdminPage() {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <p>Redirigiendo...</p>;
  }

  return (
    <div>
      <PostForm />
      <PostList/>
    </div>
  );
}
