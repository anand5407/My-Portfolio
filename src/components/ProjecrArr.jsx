import smartCampus from '../assets/Screenshot 2026-07-29 225523.png'
import wonderlust from '../assets/Screenshot 2026-07-30 002641.png'
const projects = [
    {
      id:1,
      title: "Smart Campus Assistant",
      category: "Full Stack MERN Project",

      description:
        "A campus navigation platform that helps students and visitors find buildings, view details, explore interactive maps, and check bus schedules.",

      techStack: [
        "React",
        "Tailwind CSS",
        "Node.js",
        "Express.js",
        "MongoDB",
      ],

      features: [
        "Interactive campus map",
        "Location search & details",
        "Bus schedule management",
        "Offline mode support",
        "REST API integration",
      ],

      highlights:
        "Built custom SVG map navigation with pathfinding, reusable React components, and deployed full-stack architecture.",

      image: smartCampus,

      github:
        "https://github.com/anand5407/Smart-Campus-Assistant.git",

      demo:
        "https://smart-campus-assistant-gamma.vercel.app/",
    },

    {
       id:2,
      title: "Wonderlust Travel Listing",
      category: "Full Stack Web Application",

      description:
        "A travel listing platform where users can explore, create, update, and manage vacation listings with authentication and review features.",

      techStack: [
        "Node.js",
        "Express.js",
        "MongoDB",
        "EJS",
        "Mongoose",
        "Passport.js",
      ],

      features: [
        "Complete CRUD operations",
        "RESTful API architecture",
        "User authentication & authorization",
        "Review management system",
        "Image upload with Cloudinary",
        "MVC architecture",
      ],

      highlights:
        "Implemented secure backend architecture with Express routes, Mongoose models, validation, middleware, and centralized error handling.",

      image: wonderlust,

      github:
        "https://github.com/anand5407/Wonderlut-a-travel-listing-website-.git",

      demo:
        "https://wonderlut-a-travel-listing-website.onrender.com",
    },
  ];
export default projects