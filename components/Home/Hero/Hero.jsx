"use client";
import Card from "./Utils/Card";
import sections from "@/data/data";

const Hero = () => {
  return (
    <section className="text-center py-12 ">
      <div data-aos="fade-up" className="mb-8">
        <h1 className="text-4xl md:text-6xl font-bold text-white">
          ¡Bienvenido a Nytt Land!
        </h1>
        <p className="text-lg text-gray-300 mt-4 max-w-2xl mx-auto">
          Un mundo de aventuras te espera. ¡Explora, juega y únete a nuestra comunidad!
        </p>
      </div>

      <div className="container mx-auto px-4 grid md:grid-cols-2 lg:grid-cols-3  gap-6">
        {sections.map((section, index) => (
          <Card key={index} {...section} />
        ))}
      </div>
    </section>
  );
};

export default Hero;
