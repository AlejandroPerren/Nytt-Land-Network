import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    fetch("https://nytt-land.onrender.com/")
      .then((res) => res.json())
      .then((data) => console.log("Servidor respondio:", data))
      .catch((err) => console.error("Error conectando con el servidor:", err));
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
