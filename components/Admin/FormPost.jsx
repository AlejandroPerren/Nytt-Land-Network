"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import AOS from "aos";
import "aos/dist/aos.css";

const schema = yup.object({
  title: yup.string().required("El título es obligatorio"),
  content: yup.string().required("El contenido es obligatorio"),
  imageUrl: yup
    .string()
    .url("Debe ser una URL válida")
    .required("La URL de la imagen es obligatoria"),
});

export default function PostForm({ post }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: post || { title: "", content: "", imageUrl: "" },
  });

  useEffect(() => {
    AOS.init({ duration: 800 });
    if (post) {
      reset(post);
    }
  }, [post, reset]);

  const [error, setError] = useState("");

  const submitHandler = async (data) => {
    try {
      const res = await fetch(
        "https://nytt-land.onrender.com/posts" + (post ? `/${post.id}` : ""),
        {
          method: post ? "PUT" : "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify(data),
        }
      );

      if (!res.ok) {
        throw new Error("Error al enviar el formulario");
      }

      window.location.reload();
    } catch (err) {
      setError("Error al enviar el formulario");
    }
  };

  return (
    <div className="flex justify-center">
      <form
        onSubmit={handleSubmit(submitHandler)}
        className="bg-white p-6 shadow-lg rounded-lg w-full max-w-lg"
        data-aos="fade-up"
      >
        <h2 className="text-xl font-bold mb-4 text-gray-900">
          {post ? "Editar Publicación" : "Nueva Publicación"}
        </h2>
  
        {/* Campo de Título */}
        <label className="block mb-3">
          <span className="text-gray-700">Título</span>
          <input
            type="text"
            {...register("title")}
            className="w-full p-2 border rounded-lg bg-gray-100 text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-700"
            placeholder="Título del post"
          />
          <p className="text-red-500 text-sm">{errors.title?.message}</p>
        </label>
  
        {/* Campo de Contenido */}
        <label className="block mb-3">
          <span className="text-gray-700">Contenido</span>
          <textarea
            {...register("content")}
            className="w-full p-2 border rounded-lg bg-gray-100 text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-700"
            placeholder="Contenido del post"
            rows="4"
          ></textarea>
          <p className="text-red-500 text-sm">{errors.content?.message}</p>
        </label>
  
        {/* Campo de URL de Imagen */}
        <label className="block mb-3">
          <span className="text-gray-700">URL de la Imagen</span>
          <input
            type="text"
            {...register("imageUrl")}
            className="w-full p-2 border rounded-lg bg-gray-100 text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-700"
            placeholder="https://..."
          />
          <p className="text-red-500 text-sm">{errors.imageUrl?.message}</p>
        </label>
  
        {/* Botón de envío */}
        <button
          type="submit"
          className="w-full mt-3 bg-gray-900 text-white py-2 rounded-lg hover:bg-gray-800 transition"
          data-aos="zoom-in"
        >
          {post ? "Actualizar" : "Publicar"}
        </button>
  
        {/* Mensaje de error */}
        {error && <p className="text-red-500 mt-2 text-center">{error}</p>}
      </form>
    </div>
  );
};  