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
    <form onSubmit={handleSubmit(submitHandler)}>
      <input type="text" {...register("title")} placeholder="Título" />
      <p>{errors.title?.message}</p>

      <textarea {...register("content")} placeholder="Contenido" />
      <p>{errors.content?.message}</p>

      <input type="text" {...register("imageUrl")} placeholder="URL de la imagen" />
      <p>{errors.imageUrl?.message}</p>

      <button type="submit">{post ? "Actualizar" : "Publicar"}</button>

      {error && <p>{error}</p>}
    </form>
  );
}