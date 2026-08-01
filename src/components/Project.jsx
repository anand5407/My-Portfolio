import React from "react";
import ProjectArr from "../components/ProjecrArr";
import { useNavigate } from "react-router-dom";

export default function Project(props) {
  const navigate = useNavigate();

  return (
    <div
      className={`min-h-screen px-8 md:px-16 py-24 transition-all duration-500 ${
        props.theam === "Dark"
          ? "bg-[#0b0d17] text-white"
          : "bg-gray-100 text-black"
      }`}
    >
      {/* Heading */}
      <div className="mb-16">
        <h1 className="text-5xl font-serif">Projects</h1>

        <p
          className={`mt-3 text-lg ${
            props.theam === "Dark"
              ? "text-gray-400"
              : "text-gray-600"
          }`}
        >
          A collection of projects showcasing my skills in Full Stack
          Development.
        </p>
      </div>

      {/* Project Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {ProjectArr.map((obj) => (
          <div data-aos="fade-up"
            key={obj.id}
            className={`rounded-3xl overflow-hidden border transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl
            ${
              props.theam === "Dark"
                ? "bg-[#151b2a]/90 border-gray-700 hover:border-lime-400/40"
                : "bg-white border-gray-300 hover:border-green-700/40 shadow-lg"
            }`}
          >
            {/* Project Image */}
            <div className="overflow-hidden">
              <img
                src={obj.image}
                alt={obj.title}
                className="w-full h-64 object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>

            {/* Project Details */}
            <div className="p-8">
              <h2 className="text-3xl font-bold mb-4">{obj.title}</h2>

              <p
                className={`leading-7 mb-8 ${
                  props.theam === "Dark"
                    ? "text-gray-300"
                    : "text-gray-700"
                }`}
              >
                {obj.description}
              </p>

              {/* Buttons */}
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() =>
                    navigate(`/detailedproject/${obj.id}/${props.theam}`)
                  }
                  className="px-6 py-3 rounded-xl bg-lime-500 text-black font-semibold hover:bg-lime-400 transition-all duration-300 hover:scale-105"
                >
                  Know More
                </button>

                <a
                  href={obj.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button
                    className={`px-6 py-3 rounded-xl border font-semibold transition-all duration-300 hover:scale-105
                    ${
                      props.theam === "Dark"
                        ? "border-gray-600 hover:border-white hover:bg-[#20283d]"
                        : "border-gray-300 hover:border-black hover:bg-gray-200"
                    }`}
                  >
                    GitHub Repo
                  </button>
                </a>

                <a
                  href={obj.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button
                    className={`px-6 py-3 rounded-xl border font-semibold transition-all duration-300 hover:scale-105
                    ${
                      props.theam === "Dark"
                        ? "border-sky-500 text-sky-400 hover:bg-sky-500 hover:text-white"
                        : "border-sky-500 text-sky-600 hover:bg-sky-500 hover:text-white"
                    }`}
                  >
                    Live Demo
                  </button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}