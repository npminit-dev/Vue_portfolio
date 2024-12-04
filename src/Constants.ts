export const colors = {
  BACKGROUND: '#1A1A1A',
  TEXT: '#EAEAEA',
  HIGHLIGHT: '#5BC0BE',
  HOVER: '#3A6351',
  SEPARATOR: '#2E2E2E'
}

export const PHRASES = [
  {
    title: "DEVELOPER",
    subtitle: "Passionate about creating elegant, efficient, and scalable solutions.",
  },
  {
    title: "FRONTEND EXPERT",
    subtitle: "Crafting responsive, interactive, and user-focused web applications with React and Next.js.",
  },
  {
    title: "MOBILE ENTHUSIAST",
    subtitle: "Delivering smooth and intuitive experiences with React Native and Expo.",
  },
  {
    title: "FULL-STACK SKILLS",
    subtitle: "Bridging frontend and backend with Node.js, Express, and database integration.",
  },
  {
    title: "PROBLEM SOLVER",
    subtitle: "Transforming complex challenges into optimized, maintainable, and elegant code.",
  },
  {
    title: "INNOVATION DRIVEN",
    subtitle: "Exploring CI/CD, Docker, and cloud services to bring modern solutions to life.",
  },
  {
    title: "TEAM PLAYER",
    subtitle: "Collaborating with designers and backend teams to create seamless user experiences.",
  },
  {
    title: "CONTINUOUS LEARNER",
    subtitle: "Constantly expanding knowledge through courses, certifications, and hands-on projects.",
  },
  {
    title: "DESIGN MINDED",
    subtitle: "Enhancing interfaces with a keen eye for detail using Figma and Adobe Illustrator.",
  },
  {
    title: "DATABASE HANDLER",
    subtitle: "Experienced in optimizing data flow with MySQL, PostgreSQL, and MongoDB.",
  },
  {
    title: "PASSIONATE CODER",
    subtitle: "Bringing dedication and creativity to every line of code I write.",
  },
]

export type TechType = {
  title: string;
  description: string;
  icon: string;
  color: string;
  background: string;
  position?: {
    left: number;
    top: number;
  };
};

export const TECHS: TechType[] = [
  {
    title: "React",
    description:
      "Skilled in building dynamic and interactive web applications using React's component-based architecture and state management.",
    icon: "co-react",
    color: "#61DAFB",
    background: "#00344E"
  },
  {
    title: "Vue.js",
    description:
      "Proficient in developing scalable and maintainable web applications using Vue's Composition and Options APIs.",
    icon: "ri-vuejs-line",
    color: "#42B883",
    background: "#104030"
  },
  {
    title: "JavaScript",
    description:
      "Experienced in creating dynamic, efficient, and responsive web applications with modern JavaScript (ES6+).",
    icon: "co-javascript",
    color: "#F7DF1E",
    background: "#3A3A1A"
  },
  {
    title: "HTML",
    description:
      "Proficient in crafting semantic, accessible, and SEO-friendly web structures using modern HTML standards.",
    icon: "co-html5-shield",
    color: "#E34F26",
    background: "#4A201A"
  },
  {
    title: "CSS",
    description:
      "Skilled in designing responsive and visually appealing user interfaces with modern CSS, including Flexbox and Grid.",
    icon: "co-css3-shiled",
    color: "#1572B6",
    background: "#0E2C48"
  },
  {
    title: "Node.js",
    description:
      "Capable of building lightweight RESTful APIs and implementing WebSocket connections for real-time features.",
    icon: "io-logo-nodejs",
    color: "#339933",
    background: "#1E3A1E"
  },
  {
    title: "Next.js",
    description:
      "Knowledgeable in building server-rendered React applications and optimizing performance with Next.js.",
    icon: "co-next-js",
    color: "#f5f5f5",
    background: "#3A3A3A"
  },
  {
    title: "React Native/Expo",
    description:
      "Experienced in developing cross-platform mobile applications using React Native and Expo for fast development cycles.",
    icon: "co-expo",
    color: "#61DAFB",
    background: "#00344E"
  },
  {
    title: "TypeScript",
    description:
      "Proficient in writing scalable, type-safe code with TypeScript to enhance development efficiency and reduce errors.",
    icon: "co-typescript",
    color: "#3178C6",
    background: "#1A3555"
  },
  {
    title: "SQL",
    description:
      "Skilled in database modeling, writing complex queries, and handling transactions. Familiar with MySQL, SQL Server, and SQLite, with a focus on efficient data manipulation.",
    icon: "hi-solid-database",
    color: "#F29111",
    background: "#4A3A20"
  },
  {
    title: "Docker",
    description:
      "Basic experience with Docker, including managing images, containers, volumes, and using Docker Compose for orchestration.",
    icon: "co-docker",
    color: "#2496ED",
    background: "#102A3E"
  },
  {
    title: "Figma",
    description:
      "Basic knowledge of Figma for designing user interfaces and collaborating on design projects, with a focus on prototyping and layout adjustments.",
    icon: "fa-figma",
    color: "#F24E1E",
    background: "#4A2318"
  }
];

