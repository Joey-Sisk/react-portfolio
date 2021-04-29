import React, { useEffect, useState } from "react";
import sanityClient from "../client";
// import image from "../images/pexels-felix-mittermeier-1146134.jpg";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";
import Typical from "react-typical";

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

  if (!author)
    return (
      <div className="text-center text-white bg-blueGray-900 min-h-screen">
        Loading...
      </div>
    );

  console.log(author);

  return (
    <div className="fixed-background-about bg-black">
      <div className="p-10 lg:pt-32 container mx-auto min-h-screen relative">
        <section className="bg-blueGray-500 border-b-8 border-l-4 border-blueGray-700 rounded-3xl lg:flex md:p-20 p-6">
          {/* <div className="flex justify-center"> */}
          <img
            src={
              urlFor(author.authorImage).url() +
              "?fit=crop&crop=center&h=800&w=800"
            }
            className="rounded-full w-48 w-48 lg:w-64 lg:h-64 mx-auto mb-8 shadow-lg"
            alt={author.name}
          />
          {/* </div> */}
          <div className="text-lg text-center md:text-left md:border-l-2 md:border-t-0 border-t-2 border-blueGray-300 md:ml-8 md:pl-4 pl-0 md-pt-0 pt-4 flex flex-col justify-center">
            <h1 className="custom-font text-5xl mb-4 text-transparent bg-clip-text bg-gradient-to-t from-blueGray-300 to-violet-200">
              I'm {author.name}
            </h1>
            <div className="prose lg:prose-xl text-blueGray-100">
              <BlockContent
                blocks={author.bio}
                projectId="lwunafee"
                dataset="production"
              />
            </div>
            <p className="my-6 text-blueGray-100">
              My skills include:{" "}
              <Typical
                className="font-mono"
                steps={[
                  "JavaScript",
                  1500,
                  "React.js",
                  1200,
                  "MongoDB",
                  1200,
                  "Node.js",
                  1000,
                  "Express.js",
                  900,
                  "MySQL",
                  900,
                  "HTML",
                  900,
                  "CSS",
                  900,
                  "jQuery",
                  1000,
                  "Bootstrap",
                  1000,
                  "Tailwind",
                  1200,
                  "Socket.io",
                  1500,
                  "Sanity.io",
                  1500
                ]}
                loop={Infinity}
                wrapper="p"
              />
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
