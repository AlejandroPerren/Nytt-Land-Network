"use client";
import { useEffect, useState } from "react";

const PlayerCounter = () => {
  const [online, setOnline] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchPlayers = async () => {
      try {
        const res = await fetch("https://api.mcsrvstat.us/2/190.244.150.101");
        const data = await res.json();

        if (data.online && data.players) {
          setOnline(data.players.online);
        } else {
          setError(true);
        }
      } catch (err) {
        setError(true);
      }
    };

    fetchPlayers();

    const interval = setInterval(fetchPlayers, 30000);
    return () => clearInterval(interval);
  }, []);

  if (error) return <div className="text-red-500">Error al conectar con el servidor 😢</div>;

  return (
    <div>
      {online !== null ? (
        <span className="text-green-400 font-semibold text-lg">
          {online} jugador{online === 1 ? "" : "es"} online
        </span>
      ) : (
        <span className="text-white">Cargando jugadores...</span>
      )}
    </div>
  );
};

export default PlayerCounter;
