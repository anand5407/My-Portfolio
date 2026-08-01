import React from "react";

export default function Skill(props) {
  const skills = [
    {
      title: "Frontend",
      icon: "fa-solid fa-code",
      skills: [
        "HTML5",
        "CSS3",
        "Bootstrap",
        "Tailwind CSS",
        "Shadcn UI",
        "JavaScript",
        "React.js",
      ],
    },
    {
      title: "Backend",
      icon: "fa-solid fa-server",
      skills: [
        "Java",
        "JavaScript",
        "Node.js",
        "Express.js",
        "Spring",
        "REST API",
        "CRUD",
        "JDBC",
        "Microservices",
      ],
    },
    {
      title: "Database",
      icon: "fa-solid fa-database",
      skills: [
        "MySQL",
        "Oracle 10g",
        "MongoDB",
        "Mongoose",
      ],
    },
    {
      title: "Tools",
      icon: "fa-solid fa-screwdriver-wrench",
      skills: [
        "Git",
        "GitHub",
        "Postman",
      ],
    },
  ];

  return (
    <div
      id="skills"
      className={`min-h-screen px-6 md:px-16 py-24 transition-all duration-500 ${
        props.theam === "Dark"
          ? "bg-[#0b0d17] text-white"
          : "bg-gray-100 text-black"
      }`}
    >
      <div className="mb-16">
        <h1 className="text-5xl font-serif mt-2">
          Skills & Stack
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
        {skills.map((item, index) => (
          <div
            key={index}
            data-aos="fade-up"
            data-aos-duration="700"
            data-aos-delay={index * 200}
            data-aos-once="true"
            className={`group rounded-3xl border p-8 transition-all duration-500 hover:-translate-y-5 hover:scale-105 hover:shadow-2xl ${
              props.theam === "Dark"
                ? "bg-[#151b2a]/90 border-gray-700 hover:border-lime-400/40"
                : "bg-white border-gray-300 hover:border-green-700/40 shadow-lg"
            }`}
          >
            <div className="flex items-center gap-4 mb-8">
              <div
                className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl border
                ${
                  index === 0
                    ? "text-lime-400 border-lime-400/20"
                    : index === 1
                    ? "text-sky-400 border-sky-400/20"
                    : index === 2
                    ? "text-pink-400 border-pink-400/20"
                    : "text-orange-400 border-orange-400/20"
                }`}
              >
                <i className={item.icon}></i>
              </div>

              <h2 className="text-2xl font-semibold">
                {item.title}
              </h2>
            </div>

            <div className="flex flex-wrap gap-3">
              {item.skills.map((skill, i) => (
                <span
                  key={i}
                  className={`px-4 py-2 rounded-xl text-sm transition-all duration-300 cursor-default hover:scale-110 ${
                    props.theam === "Dark"
                      ? "bg-[#1c2234] border border-gray-700 text-gray-300 hover:border-lime-400 hover:text-white"
                      : "bg-gray-200 border border-gray-300 hover:border-green-700"
                  }`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}