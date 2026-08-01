import React from "react";
import ExpAvatar from "./ExpAvatar";

export default function Experience(props) {
  const experience = [
    {
      company: "Q Spiders / J Spiders",
      role: "Java Full Stack Development Trainee",
      duration: "Jan 2025 – Present",
      badge: "Training",
      points: [
        "Selected through a competitive screening process for an industry-focused Java Full Stack Development program.",
        "Building practical skills in Java, React, Spring Boot, Node.js, Express.js, SQL, MongoDB, and REST APIs.",
      ],
    },
    {
      company: "Amelia Coal Mining",
      location: "Madhya Pradesh",
      role: "IT Intern",
      duration: "Aug 2024 – Oct 2024",
      badge: "Internship",
      points: [
        "Gained hands-on exposure to IT infrastructure, enterprise systems, and technical support.",
        "Assisted with documentation, troubleshooting, and day-to-day IT operations.",
      ],
    },
  ];

  return (
    <div
      className={`min-h-screen px-6 md:px-16 pt-28 pb-16 transition-all duration-500 ${
        props.theam === "Dark"
          ? "bg-[#0b0d17] text-white"
          : "bg-gray-100 text-black"
      }`}
    >
      <div className="flex flex-col md:flex-row justify-between items-start gap-8 md:gap-16">
        {/* Left Side */}
        <div className="w-full md:w-[65%]">
          <h1 className="text-4xl md:text-6xl font-serif mb-8 md:mb-14">
            My Experience
           
          </h1>

          <div className="space-y-8">
            {experience.map((exp, index) => (
              <div data-aos="fade-up"
                key={index}
                className={`rounded-3xl border p-8 transition-all duration-300 hover:-translate-y-1 ${
                  props.theam === "Dark"
                    ? "bg-[#141a27] border-gray-700 hover:border-lime-400/40"
                    : "bg-white border-gray-300 hover:border-green-700/40 shadow-lg"
                }`}
              >
                <div className="flex flex-col lg:flex-row justify-between items-start gap-5">
                  <div className="flex gap-5">
                    <div
                      className={`w-16 h-16 rounded-2xl flex items-center justify-center ${
                        props.theam === "Dark"
                          ? "bg-lime-400/10 border border-lime-400/20"
                          : "bg-green-700/10 border border-green-700/20"
                      }`}
                    >
                      <i
                        className={`fa-solid fa-briefcase text-xl ${
                          props.theam === "Dark"
                            ? "text-lime-400"
                            : "text-green-700"
                        }`}
                      ></i>
                    </div>

                    <div>
                      <div className="flex items-center gap-3">
                        <h2 className="text-2xl font-bold">{exp.role}</h2>

                        <span
                          className={`px-4 py-1 rounded-full text-sm font-medium border ${
                            props.theam === "Dark"
                              ? "border-lime-400/40 text-lime-400 bg-lime-400/5"
                              : "border-green-700/40 text-green-700 bg-green-700/5"
                          }`}
                        >
                          {exp.badge}
                        </span>
                      </div>

                      <p
                        className={`mt-2 ${
                          props.theam === "Dark"
                            ? "text-gray-400"
                            : "text-gray-600"
                        }`}
                      >
                        {exp.company}
                        {exp.location && ` • ${exp.location}`}
                      </p>
                    </div>
                  </div>

                  <p
                    className={`text-sm ${
                      props.theam === "Dark"
                        ? "text-gray-400"
                        : "text-gray-500"
                    }`}
                  >
                    {exp.duration}
                  </p>
                </div>

                <div className="mt-8 ml-8 border-l border-gray-600 pl-8 space-y-5">
                  {exp.points.map((point, i) => (
                    <div key={i} className="flex gap-3">
                      <span
                        className={
                          props.theam === "Dark"
                            ? "text-lime-400"
                            : "text-green-700"
                        }
                      >
                        →
                      </span>

                      <p
                        className={`leading-8 ${
                          props.theam === "Dark"
                            ? "text-gray-300"
                            : "text-gray-700"
                        }`}
                      >
                        {point}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side */}
        <div className="w-full md:w-[35%] flex justify-center md:sticky md:top-28">
          <ExpAvatar />
        </div>
      </div>
    </div>
  );
}