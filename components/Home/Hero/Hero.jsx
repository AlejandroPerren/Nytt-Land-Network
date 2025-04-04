"use client";
import Card from "./Utils/Card";
import sections from "@/data/data";
import { useState } from "react";
import Modal from "./Utils/Modal";

const Hero = () => {
  const [modalContent, setModalContent] = useState(null);

  return (
    <section className="text-center py-12" id="hero">
      <div data-aos="fade-up" className="mb-8">
        <h1 className="text-4xl md:text-6xl font-bold text-white">
          ¡Bienvenido a Nytt Land!
        </h1>
        <p className="text-lg text-gray-300 mt-4 max-w-2xl mx-auto">
          Un mundo de aventuras te espera. ¡Explora, juega y únete a nuestra comunidad!
        </p>
      </div>

      <div className="container mx-auto px-4 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sections.map((section, index) => (
          <Card
            key={index}
            {...section}
            onOpenModal={() => setModalContent({ title: section.title, text: section.text })}
          />
        ))}
      </div>

      {modalContent && (
        <Modal
          title={modalContent.title}
          text={modalContent.text}
          onClose={() => setModalContent(null)}
        />
      )}
    </section>
  );
};


export default Hero;
