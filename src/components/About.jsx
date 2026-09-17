import React from "react";
import Avatr from "./Avatr";
const My_Resume = "/Anand_Kumar_Mishra_Resume.pdf";
import { Typewriter } from "react-simple-typewriter";

// Skill Logos
import react from "../assets/skills/React.png";
import javascript from "../assets/skills/JavaScript.png";
import node from "../assets/skills/Node.js.png";
import express from "../assets/skills/Express.png";
import mongodb from "../assets/skills/MongoDB (1).png";
import java from "../assets/skills/Java.png";
import tailwind from "../assets/skills/MySQL.png";

export default function About(props) {
  const handleResumeDownload = async () => {
    try {
      const response = await fetch(My_Resume);
      const blob = await response.blob();
      const blobUrl = URL.createObjectURL(blob);
      const link = document.createElement("a");

      link.href = blobUrl;
      link.download = "Anand_Kumar_Mishra_Resume.pdf";
      document.body.appendChild(link);
      link.click();
      link.remove();

      setTimeout(() => URL.revokeObjectURL(blobUrl), 0);
    } catch (error) {
      window.open(My_Resume, "_blank", "noopener,noreferrer");
    }
  };

  const skills = [react, javascript, node, express, mongodb, java, tailwind];

  const positions = [
    "top-0 left-1/2",
    "top-[15%] right-0",
    "bottom-[15%] right-0",
    "bottom-0 left-1/2",
    "bottom-[15%] left-0",
    "top-[15%] left-0",
    "top-1/2 right-[-30px]",
  ];

  return (
    <div
      className={`
      min-h-screen
      flex
      flex-col
      md:flex-row
      items-center
      justify-between
      px-6
      md:px-16
      pt-28
      md:pt-32
      pb-16
      overflow-hidden
      transition-all
      duration-500

      ${
        props.theam === "Dark"
          ? "bg-[#0b0d17] text-white"
          : "bg-gray-100 text-black"
      }

      `}
    >
      {/* LEFT CONTENT */}

      <div className="w-full md:w-[55%]">
        {/* Availability */}

        <div
          className={`
          inline-flex
          items-center
          gap-3
          px-5
          py-2
          rounded-full
          border
          mb-8
          font-medium

          ${
            props.theam === "Dark"
              ? "border-lime-400/50 text-lime-400 bg-lime-400/5"
              : "border-green-700/50 text-green-700 bg-green-700/5"
          }

          `}
        >
          <span className="relative flex h-3 w-3">
            <span
              className="
            absolute
            inline-flex
            h-full
            w-full
            rounded-full
            bg-lime-400
            opacity-75
            animate-ping
            "
            ></span>

            <span
              className="
            relative
            inline-flex
            rounded-full
            h-3
            w-3
            bg-lime-400
            "
            ></span>
          </span>
          Available for opportunities
        </div>

        {/* Heading */}

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif leading-tight">
          <div>
            <Typewriter
              words={["Hello", "नमस्ते", "Bonjour", "Hola"]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={200}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </div>

          <div>
            I'm{" "}
            <span
              className={`
          italic

          ${props.theam === "Dark" ? "text-lime-400" : "text-green-700"}

          `}
            >
              Anand
            </span>
          </div>

          <div>
            Full Stack
            <br />
            Developer.
          </div>
        </h1>

        {/* Description */}

        <p
          className={`
        mt-8
        text-base
        sm:text-lg
        md:text-xl
        leading-8
        md:leading-9

        ${props.theam === "Dark" ? "text-gray-400" : "text-gray-700"}

        `}
        >
          I am Anand Kumar Mishra, 2026 B.Tech CSE graduate and an aspiring Full
          Stack Developer. I have completed the MERN Stack and am currently
          pursuing Java Full Stack training at QSpiders. I enjoy building
          responsive web applications, learning new technologies, and
          continuously improving my skills. I am actively seeking opportunities
          to start my career as a Software Developer.
        </p>

        {/* Resume Button */}

        <a
          href={My_Resume}
          onClick={(event) => {
            event.preventDefault();
            handleResumeDownload();
          }}
          className={`
        mt-10
        inline-flex
        items-center
        px-8
        py-4
        rounded-xl
        font-semibold
        transition-all
        duration-300
        hover:scale-105

        ${
          props.theam === "Dark"
            ? "bg-lime-400 text-black hover:shadow-[0_0_25px_#A3E635]"
            : "bg-green-700 text-white hover:shadow-[0_0_20px_#15803d]"
        }
        `}
        >
          Resume
          <i className="fa-solid fa-arrow-down ml-3"></i>
        </a>
      </div>

      {/* RIGHT AVATAR + ORBIT */}

      <div
        className="
      w-full
      md:w-[40%]
      h-[420px]
      md:h-[600px]
      flex
      justify-center
      items-center
      relative
      "
      >
        {/* Orbit Circle */}

        <div
          className="
        absolute
        w-[300px]
        h-[300px]
        md:w-[480px]
        md:h-[480px]
        rounded-full
        border
        border-dashed
        border-gray-400/30
        animate-orbit
        "
        >
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`
            absolute
            ${positions[index]}
            w-10
            h-10
            md:w-16
            md:h-16
            bg-white
            rounded-full
            p-2
            md:p-3
            shadow-xl
            animate-counter
            `}
            >
              <img
                src={skill}
                alt="skill"
                className="
              w-full
              h-full
              object-contain
              "
              />
            </div>
          ))}
        </div>

        {/* Avatar */}

        <div
          className="
        relative
        z-20
        "
        >
          <Avatr />
        </div>

        {/* Bottom Blend */}

        <div
          className={`
        absolute
        bottom-0
        left-0
        w-full
        h-72
        z-30
        pointer-events-none
        bg-gradient-to-t

        ${props.theam === "Dark" ? "from-[#0b0d17]" : "from-gray-100"}

        to-transparent

        `}
        ></div>
      </div>
    </div>
  );
}
