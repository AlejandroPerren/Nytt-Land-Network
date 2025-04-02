"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  email: yup.string().email("Email inválido").required("Campo requerido"),
  password: yup.string().min(6, "Mínimo 6 caracteres").required("Campo requerido"),
});

export default function RegisterForm() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const onSubmit = async (data) => {
    setError("");
    setSuccess("");

    const res = await fetch("https://nytt-land.onrender.com/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      const { message } = await res.json();
      setError(message);
      return;
    }

    setSuccess("Registro exitoso, ahora puedes iniciar sesión");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
      <input type="email" {...register("email")} placeholder="Email" />
      <p>{errors.email?.message}</p>

      <input type="password" {...register("password")} placeholder="Contraseña" />
      <p>{errors.password?.message}</p>

      <button type="submit">Registrarse</button>

      {error && <p className="text-red-500">{error}</p>}
      {success && <p className="text-green-500">{success}</p>}
    </form>
  );
}
