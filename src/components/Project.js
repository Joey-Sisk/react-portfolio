import React, { useEffect, useState } from "react";
import sanityClient from "../client";

export default function Project() {
  const [projectData, setProjectData] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "project"]{
      title,
      date,
      place,
      description,
      projectType,
      linkLive,
      linkRepo,
      tags
    }`
      )
      .then((data) => setProjectData(data))
      .catch(console.error);
  }, []);

  if (!projectData) return <div className="text-center text-white bg-blueGray-900 min-h-screen">Loading...</div>;

  console.log(projectData[0].title);

  return (
    <main className="bg-blueGray-800 min-h-screen p-12">
      <section className="container mx-auto">
        <h1 className="text-5xl text-blueGray-200 flex justify-center custom-font">My Projects</h1>
        <h2 className="text-2xl text-blueGray-400 flex justify-center mb-12">
          Welcome to my projects page
        </h2>
        <section className="grid grid-columns-2 gap-8">
          {projectData &&
            projectData.map((project, index) => (
              <article className="relative rounded-lg shadow-lg bg-blueGray-500 p-16">
                <h3 className="text-blueGray-100 text-3xl font-bold mb-2 hover:text-red-700">
                  <a
                    href={projectData.link}
                    alt={project.title}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {projectData.title}
                  </a>
                </h3>
                
                <div className="text-blueGray-200 text-sm space-x-4"><p>{projectData.title}</p>
                  <span>
                    <strong className="font-bold">Finished on</strong>:{" "}
                    {new Date(project.date).toLocaleDateString()}
                  </span>
                  <span>
                    <strong className="font-bold">Company</strong>:{" "}
                    {project.place}
                  </span>
                  <span>
                    <strong className="font-bold">Type</strong>:{" "}
                    {project.projectType}
                  </span>
                  <p className="my-6 text-lg text-gray-700 leading-relaxed">
                    {project.description}
                  </p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-red=500 underline font-bold hover:underline hover:text-indigo-300 text-xl"
                  >
                    View the Project{" "}
                    {/* <span className="inline-block" role="img" aria-label="right pointer">
                      👉
                    </span> */}
                  </a>
                </div>
              </article>
            ))}
        </section>
      </section>
    </main>
  );
}
