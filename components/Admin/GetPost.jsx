"use client";

import { useState, useEffect } from "react";

export default function PostList() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch("https://nytt-land.onrender.com/posts");
        if (!res.ok) throw new Error("Error al obtener los posts");
        const data = await res.json();
        setPosts(data);
      } catch (err) {
        setError(err.message);
      }
    };
    fetchPosts();
  }, []);

  const handleDelete = async (id) => {
    try {
      const res = await fetch(`https://nytt-land.onrender.com/posts/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      if (!res.ok) throw new Error("Error al eliminar el post");
      setPosts(posts.filter((post) => post.id !== id));
    } catch (err) {
      setError(err.message);
    }
  };

  const getGoogleDriveImageUrl = (url) => {
    const match = url.match(/[-\w]{25,}/);
    return match
      ? `https://drive.google.com/thumbnail?id=${match[0]}&sz=w1000`
      : url;
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {error && <p className="text-red-500">{error}</p>}
      {posts.map((post) => (
        <div
          key={post.id}
          className="border p-4 rounded-lg shadow-lg bg-white transition-transform hover:scale-105"
        >
          <h2 className="text-xl font-bold">{post.title}</h2>
          <p className="text-gray-600">{post.content}</p>
          <img
            src={getGoogleDriveImageUrl(post.imageUrl)}
            alt={post.title}
            className="w-full h-40 object-cover mt-2 rounded"
          />
          <button
            onClick={() => handleDelete(post.id)}
            className="mt-2 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 w-full"
          >
            Eliminar
          </button>
        </div>
      ))}
    </div>
  );
}
