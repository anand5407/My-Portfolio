import React from "react";
import { useParams } from "react-router-dom";
import ProjectArr from "../components/ProjecrArr";

export default function DetailedProject() {
  const { id, theam } = useParams();

  const project = ProjectArr.find((item) => item.id === Number(id));

  if (!project) {
    return (
      <div
        className={`min-h-screen flex items-center justify-center text-3xl font-bold ${
          theam === "Dark"
            ? "bg-[#0b0d17] text-white"
            : "bg-gray-100 text-black"
        }`}
      >
        Project Not Found
      </div>
    );
  }

  return (
    <div
      className={`min-h-screen py-24 px-6 md:px-16 transition-all duration-500 ${
        theam === "Dark"
          ? "bg-[#0b0d17] text-white"
          : "bg-gray-100 text-black"
      }`}
    >
      <div
        className={`max-w-6xl mx-auto rounded-3xl border p-6 md:p-10 transition-all duration-500 ${
          theam === "Dark"
            ? "bg-[#151b2a] border-gray-700"
            : "bg-white border-gray-300 shadow-xl"
        }`}
      >
        {/* Project Image */}
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-64 md:h-[450px] object-cover rounded-2xl mb-10"
        />

        {/* Title */}
        <h1 className="text-3xl md:text-5xl font-bold mb-3">
          {project.title}
        </h1>

        {/* Category */}
        <p className="text-lime-500 text-xl font-semibold mb-10">
          {project.category}
        </p>

        {/* Description */}
        <section className="mb-10">
          <h2 className="text-3xl font-semibold mb-4">
            Description
          </h2>

          <p
            className={`leading-8 text-lg ${
              theam === "Dark"
                ? "text-gray-300"
                : "text-gray-700"
            }`}
          >
            {project.description}
          </p>
        </section>

        {/* Tech Stack */}
        <section className="mb-10">
          <h2 className="text-3xl font-semibold mb-5">
            Tech Stack
          </h2>

          <div className="flex flex-wrap gap-3">
            {project.techStack.map((tech, index) => (
              <span
                key={index}
                className={`px-5 py-2 rounded-xl border transition-all duration-300 hover:scale-105 ${
                  theam === "Dark"
                    ? "bg-[#1c2234] border-gray-700 text-gray-300 hover:border-lime-400"
                    : "bg-gray-200 border-gray-300 hover:border-green-700"
                }`}
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Features */}
        <section className="mb-10">
          <h2 className="text-3xl font-semibold mb-5">
            Features
          </h2>

          <div className="space-y-4">
            {project.features.map((feature, index) => (
              <div
                key={index}
                className={`flex items-start gap-3 rounded-xl p-4 border ${
                  theam === "Dark"
                    ? "bg-[#1c2234] border-gray-700"
                    : "bg-gray-50 border-gray-300"
                }`}
              >
                <span className="text-lime-500 text-xl">✓</span>

                <p
                  className={
                    theam === "Dark"
                      ? "text-gray-300"
                      : "text-gray-700"
                  }
                >
                  {feature}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Highlights */}
        <section className="mb-10">
          <h2 className="text-3xl font-semibold mb-4">
            Highlights
          </h2>

          <div
            className={`rounded-2xl border p-6 ${
              theam === "Dark"
                ? "bg-[#1c2234] border-gray-700 text-gray-300"
                : "bg-gray-50 border-gray-300 text-gray-700"
            }`}
          >
            {project.highlights}
          </div>
        </section>

        {/* Buttons */}
        <div className="flex flex-wrap gap-5">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className={`px-6 py-3 rounded-xl font-semibold border transition-all duration-300 hover:scale-105 ${
              theam === "Dark"
                ? "border-gray-600 hover:border-white hover:bg-[#20283d]"
                : "border-gray-300 hover:border-black hover:bg-gray-200"
            }`}
          >
            GitHub Repository
          </a>

          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 rounded-xl font-semibold bg-lime-500 text-black hover:bg-lime-400 transition-all duration-300 hover:scale-105"
          >
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
}