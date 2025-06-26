import CodingPlatformImage from '../CodingPlatform.png';
import wheatherImage from "../Wheather.png"

const projectsData= [
    {
      title: "Coding Platform",
      shortDescription: `A full-stack competitive coding platform built with the MERN stack, featuring user authentication (OTP via Redis), coding editor, submission and run services (Judge0), AI-based help, interactive Live Real Time battles, and a learning page for DSA articles and discussions.`,
      fullDescription: `This project is a full‑stack coding and learning platform built with the MERN stack. It offers an interactive coding editor (Monaco) with Judge0 integration for running and submitting code, user authentication with OTP and JWT, and user profiles with streaks, activity heatmaps, and followers.

      The platform includes a learning page with DSA articles, nested comments, and notifications for replies. Its highlight is the Battle Mode, allowing real‑time coding contests with difficulty and topic selection, powered by Socket.IO and protected against disconnections. Featuring AI chat support, video editorials, and an admin panel, it delivers a seamless coding and learning experience for developers of all levels.`,
      technologies: ["React", "Node.js", "MongoDB", "Express.js","Redux", "Judge0 API", "Redis","TipTap","Monaco Editor","Socket.io","LLM","Zod"],
      tagline:"End to End Complete Project",
      link: "https://github.com/anurag-tiw-ari/CodeXCodingPlatform",
      image:CodingPlatformImage
    },
    {
      title: "Weather App",
      shortDescription: "A Weather App built using HTML, CSS, JavaScript, and the OpenWeather API. This project introduced me to the world of APIs and taught me how to fetch, parse, and display data from an external source..",
      fullDescription: "It helped me learn how to work with APIs for the first time. The app lets users search for any city and view its current weather details such as temperature, humidity, and conditions.Through this project, I understood how to make API requests, handle JSON data, and update the UI dynamically. It gave me practical experience with asynchronous JavaScript and strengthened my understanding of how frontend and external data sources interact.",
      technologies: ["HTML","CSS","JavaScript","Open Weather API"],
      tagline:"Small Project Big Impact",
      link: "https://github.com/anurag-tiw-ari/weatherapp",
      image:wheatherImage
    },
    {
      title: "Live Chat Application",
      shortDescription: "A real‑time chat application with user authentication, status indicators, auto‑assigned avatars, and user search capabilities, built for seamless communication.",
      fullDescription: "Developed a full‑stack Chat Application with a secure JWT-based authentication system, allowing users to register, log in, and connect in real‑time. Integrated Socket.io for instant messaging and online status indicators, and leveraged the Dicebear API for automatic avatar assignment. Implemented a user search feature for quick access to chats and optimized the UI for a clean and intuitive experience, ensuring seamless communication across the platform.",
      technologies: ["React", "Redux", "MongoDB", "Node.js", "React.js","Express.js","Socket.io"],
      tagline:"Authentication to Chat ",
      link: "https://github.com/anurag-tiw-ari/Chat-app"
    }
  ]

  export default projectsData