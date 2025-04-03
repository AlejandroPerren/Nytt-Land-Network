"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  title: yup.string().required("El título es obligatorio"),
  content: yup.string().required("El contenido es obligatorio"),
  imageUrl: yup.string().url("Debe ser una URL válida").required("La URL de la imagen es obligatoria"),
});

export default function PostForm({ post }) {
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(schema),
    defaultValues: post || { title: "", content: "", imageUrl: "" },
  });

  useEffect(() => {
    if (post) {
      reset(post);
    }
  }, [post, reset]);

  const [error, setError] = useState("");

  const submitHandler = async (data) => {
    try {
      const res = await fetch("https://nytt-land.onrender.com/posts" + (post ? `/${post.id}` : ""), {
        method: post ? "PUT" : "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        throw new Error("Error al enviar el formulario");
      }

      window.location.reload();
    } catch (err) {
      setError("Error al enviar el formulario");
    }
  };

  return (
<form onSubmit={handleSubmit(submitHandler)} className="bg-white p-6 shadow-lg rounded-lg w-full max-w-md">
  <h2 className="text-xl font-bold mb-4">{post ? "Editar Publicación" : "Nueva Publicación"}</h2>

  <label className="block mb-2">
    <span className="text-gray-700">Título</span>
    <input
      type="text"
      {...register("title")}
      className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
      placeholder="Título del post"
    />
    <p className="text-red-500">{errors.title?.message}</p>
  </label>

  <label className="block mb-2">
    <span className="text-gray-700">Contenido</span>
    <textarea
      {...register("content")}
      className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
      placeholder="Contenido del post"
    ></textarea>
    <p className="text-red-500">{errors.content?.message}</p>
  </label>

  <label className="block mb-2">
    <span className="text-gray-700">URL de la Imagen</span>
    <input
      type="text"
      {...register("imageUrl")}
      className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
      placeholder="https://..."
    />
    <p className="text-red-500">{errors.imageUrl?.message}</p>
  </label>

  <button type="submit" className="w-full mt-3 bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
    {post ? "Actualizar" : "Publicar"}
  </button>

  {error && <p className="text-red-500 mt-2">{error}</p>}
</form>

  );
}