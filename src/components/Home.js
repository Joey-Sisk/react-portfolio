import React from "react";
import image from "../suSpace.png";

export default function Home() {
  return (
    <main>
      <img
        src={image}
        alt="Drawing of space from Steven Universe"
        className="absolute object-cover w-full h-full"
      />
      <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
        <h1 className="text-6xl text-blue-100 font-bold monospace leading-none lg:leading-snug home-name">
          Joey Sisk
        </h1>
      </section>
    </main>
  );
}
