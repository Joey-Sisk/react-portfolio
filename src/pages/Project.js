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

  if (!projectData)
    return (
      <div className="text-center text-white bg-blueGray-900 min-h-screen">
        Loading...
      </div>
    );

  console.log(projectData);

  return (
    <div className="bg-blueGray-800 min-h-screen p-12">
      <section className="container mx-auto">
        <h1 className="text-5xl text-blueGray-200 flex justify-center custom-font text-center">
          My Projects
        </h1>
        <h2 className="text-2xl text-blueGray-400 flex justify-center mb-12 text-center">
          Welcome to my projects page
        </h2>
        <section className="grid grid-columns-2 gap-8">
          {projectData &&
            projectData.map((project, index) => (
              <article className="relative rounded-lg shadow-lg bg-blueGray-500 border-b-8 border-l-4 border-blueGray-600 rounded-3xl md:p-20 p-6">
                <h3 className="transition duration-700 text-blueGray-100 text-3xl font-bold mb-2 hover:text-violet-300">
                  <a
                    href={project.linkLive}
                    alt={project.title}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.title}
                  </a>
                </h3>
                <div className="text-violet-100 text-sm space-x-4">
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
                  <p className="my-6 text-lg text-blueGray-100 leading-relaxed">
                    {project.description}
                  </p>
                  <a
                    href={project.linkLive}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition duration-700 text-violet-300 font-bold hover:text-violet-400 text-xl"
                  >
                    -{" "}
                    <span className="underline">View the Deployed Project</span>
                  </a>
                  <br />
                  <a
                    href={project.linkRepo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition duration-700 text-violet-300 font-bold hover:text-violet-400 text-xl"
                  >
                    -{" "}
                    <span className="underline">View the Project Reposotory</span>
                  </a>
                </div>
              </article>
            ))}
        </section>
      </section>
    </div>
  );
}
