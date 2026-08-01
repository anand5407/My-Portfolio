import React from "react";

export default function Asidebar(props) {
  return (
    <div
      className={`fixed left-0 top-1/2 -translate-y-1/2 z-50
      hidden md:flex flex-col gap-4 p-2 rounded-r-xl shadow-md
      transition-all duration-500
      ${
        props.theam === "Dark"
          ? "bg-[#111827] text-white border border-gray-700"
          : "bg-white text-gray-800 border border-gray-200"
      }`}
    >
      <a
        href="https://linkedin.com/in/anand-mishra-59317230a"
        target="_blank"
        rel="noreferrer"
        className={`text-lg transition-all duration-300 hover:scale-125
        ${
          props.theam === "Dark"
            ? "hover:text-blue-400"
            : "hover:text-blue-600"
        }`}
      >
        <i className="fa-brands fa-linkedin"></i>
      </a>

      <a
        href="https://github.com/anand5407"
        target="_blank"
        rel="noreferrer"
        className={`text-lg transition-all duration-300 hover:scale-125
        ${
          props.theam === "Dark"
            ? "hover:text-gray-300"
            : "hover:text-black"
        }`}
      >
        <i className="fa-brands fa-github"></i>
      </a>

      <a
        href="https://www.instagram.com/__mishra.ji_/?hl=en"
        target="_blank"
        rel="noreferrer"
        className={`text-lg transition-all duration-300 hover:scale-125
        ${
          props.theam === "Dark"
            ? "hover:text-pink-400"
            : "hover:text-pink-600"
        }`}
      >
        <i className="fa-brands fa-square-instagram"></i>
      </a>

      <a
        href="https://www.facebook.com/profile.php?id=100021506709362"
        target="_blank"
        rel="noreferrer"
        className={`text-lg transition-all duration-300 hover:scale-125
        ${
          props.theam === "Dark"
            ? "hover:text-blue-400"
            : "hover:text-blue-600"
        }`}
      >
        <i className="fa-brands fa-facebook"></i>
      </a>
    </div>
  );
}