"use client";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";

const schema = yup.object({
  title: yup.string().required("Título requerido"),
  content: yup.string().required("Contenido requerido"),
  image: yup.mixed().test("fileSize", "La imagen es muy grande", (value) => {
    return value.length === 0 || value[0].size <= 2 * 1024 * 1024;
  }),
});

export default function PostForm({ onPostCreated }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const [error, setError] = useState("");

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("content", data.content);
    if (data.image.length > 0) {
      formData.append("image", data.image[0]);
    }

    const token = localStorage.getItem("token");

    const res = await fetch("/api/post/post", {
      method: "POST",
      headers: { Authorization: `Bearer ${token}` },
      body: formData,
    });

    if (!res.ok) {
      setError("Error al crear el post");
      return;
    }

    onPostCreated();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" {...register("title")} placeholder="Título" />
      <p>{errors.title?.message}</p>

      <textarea {...register("content")} placeholder="Contenido" />
      <p>{errors.content?.message}</p>

      <input type="file" {...register("image")} />
      <p>{errors.image?.message}</p>

      <button type="submit">Crear Post</button>
      {error && <p>{error}</p>}
    </form>
  );
}