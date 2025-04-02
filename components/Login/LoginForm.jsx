"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import AOS from "aos";
import "aos/dist/aos.css";

const schema = yup.object({
  email: yup.string().email("Email inválido").required("Campo requerido"),
  password: yup.string().min(6, "Mínimo 6 caracteres").required("Campo requerido"),
});

export default function LoginForm() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });
  
  const [error, setError] = useState("");
  
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

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
    <div className="flex justify-center items-center min-h-screen bg-cover bg-center">
          <form onSubmit={handleSubmit(onSubmit)} className="bg-black bg-opacity-40 backdrop-blur-2xl p-8 rounded-lg shadow-2xl text-white w-80 border border-gray-700" data-aos="fade-up">
        <h2 className="text-xl mb-4 text-center font-bold">Iniciar Sesión</h2>
        
        <input 
          type="email" {...register("email")} 
          placeholder="Email" 
          className="w-full p-2 mb-2 rounded bg-gray-900 bg-opacity-50 text-white outline-none border border-gray-600"
        />
        <p className="text-red-500 text-sm">{errors.email?.message}</p>
        
        <input 
          type="password" {...register("password")} 
          placeholder="Contraseña" 
          className="w-full p-2 mb-2 rounded bg-gray-900 bg-opacity-50 text-white outline-none border border-gray-600"
        />
        <p className="text-red-500 text-sm">{errors.password?.message}</p>
        
        <button type="submit" className="w-full bg-green-600 hover:bg-green-700 transition p-2 rounded mt-4">
          Iniciar Sesión
        </button>
        
        {error && <p className="text-red-500 text-sm mt-2 text-center">{error}</p>}
      </form>
    </div>
  );
}
