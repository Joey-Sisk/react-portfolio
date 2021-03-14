import React, { useEffect, useState } from "react";
import sanityClient from "../client";
import image from "../suSpace.png";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

export default function About() {
  const [author, setAuthor] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "author"]{
      name,
      bio,
      "authorImage": image.asset->url
    }`
      )
      .then((data) => setAuthor(data[0]))
      .catch(console.error);
  }, []);

  if (!author) return <div>Loading...</div>;

  console.log(author);

  return (
    <main>
      <img
        src={image}
        alt="Drawing of space from Steven Universe"
        className="absolute object-cover w-full h-full"
      />
      <div className="p-10 lg:pt-48 container mx-auto relative">
        <section className="bg-blue-800 rounded-lg shadow-2xl lg:flex p-20">
          <div className="flex justify-center">
            <img
              src={
                urlFor(author.authorImage).url() +
                "?fit=crop&crop=center&h=800&w=800"
              }
              className="rounded-full w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 mr-8 mb-8"
              alt={author.name}
            />
          </div>
          <div className="text-lg flex flex-col justify-center">
            <h1 className="monospace text-5xl text-purple-300 mb-4">
              Hello, I'm <span className="text-indigo-100">{author.name}</span>
            </h1>
            <div className="prose lg:prose-xl text-white">
              <BlockContent
                blocks={author.bio}
                projectId="lwunafee"
                dataset="production"
              />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
