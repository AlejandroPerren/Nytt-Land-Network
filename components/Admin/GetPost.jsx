"use client";

import React, { useState, useEffect } from "react";
import Card from "../Home/Hero/Utils/Card";
import Modal from "../Home/Hero/Utils/Modal";

export default function PostList() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState("");
  const [modalContent, setModalContent] = useState(null);
  const token = localStorage.getItem("token");

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
        headers: { Authorization: `Bearer ${token}` },
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
    <div className="relative min-h-screen bg-gray-100">
      <div className="absolute inset-0 bg-[url('/img/background.png')] bg-cover bg-center opacity-50"></div>
      <div className="relative z-10 p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {error && <p className="text-red-500">{error}</p>}
        {posts.map((post) => (
          <Card
            key={post.id}
            title={post.title}
            text={post.content}
            image={getGoogleDriveImageUrl(post.imageUrl)}
            onOpenModal={() => setModalContent(post.content)}
            {...(token ? { onDelete: () => handleDelete(post.id) } : {})}
          >
          </Card>
        ))}
      </div>
      {modalContent && (
        <Modal text={modalContent} onClose={() => setModalContent(null)} />
      )}
    </div>
  );
}
