"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  email: yup.string().email("Email inválido").required("Campo requerido"),
  password: yup.string().min(6, "Mínimo 6 caracteres").required("Campo requerido"),
});

export default function LoginForm() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const [error, setError] = useState("");

  const onSubmit = async (data) => {
    const res = await fetch("https://nytt-land.onrender.com/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      setError("Credenciales incorrectas");
      return;
    }

    const { token } = await res.json();
    localStorage.setItem("token", token);
    window.location.href = "/admin"; 
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="email" {...register("email")} placeholder="Email" />
      <p>{errors.email?.message}</p>

      <input type="password" {...register("password")} placeholder="Contraseña" />
      <p>{errors.password?.message}</p>

      <button type="submit">Iniciar Sesión</button>

      {error && <p>{error}</p>}
    </form>
  );
}
