import React from "react";
// import image from "../images/pexels-philippe-donn-1169754-edit.jpg";

export default function Home() {
  return (
    <main className="fixed-background-main bg-black">
      <div></div>
      {/* <img
        src={image}
        alt="Photo by Hristo Fidanov from Pexels"
        className="absolute w-full h-full object-cover bg-fixed"
      /> */}
      <section className="relative flex justify-center min-h-screen pt-6 lg:pt-32 px-8">
        <h1 className="text-6xl text-white font-bold custom-font leading-none lg:leading-snug home-name">
          Joey Sisk
        </h1>
      </section>
    </main>
  );
}
