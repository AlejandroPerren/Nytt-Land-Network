"use client";
import PostForm from "@/components/Admin/FormPost";
import { useAuth } from "@/hooks/useAuth";

export default function AdminPage() {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <p>Redirigiendo...</p>;
  }

  return (
    <div>
      <PostForm />
    </div>
  );
}
