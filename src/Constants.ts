import type { Project, ProjectIcon } from "./typedefs/projects";

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
    subtitle: "Crafting responsive, interactive, and user-focused web applications with Vue, React and Next.js.",
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
    color: "#f5f5f5",
    background: "#3A3A3A"
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

const ico = {
  Zustand: {
    name: 'ai-zotero',
    background: '#2D2622'
  },
  TanStack: {
    name: 'si-reactquery',
    background: '#2F2844'
  },
  RNExpo: {
    name: 'co-expo',
    background: '#555'
  },
  React: {
    name: 'co-react',
    background: '#00344E'
  },
  NodeJS: {
    name: 'io-logo-nodejs',
    background: '#1E3A1E'
  },
  JS: {
    name: 'co-javascript',
    background: '#3A3A1A'
  },
  CSS: {
    name: 'co-css3-shiled',
    background: '#0E2C48'
  },
  Vue: {
    name: 'ri-vuejs-line',
    background: '#104030'
  },
  TS: {
    name: 'co-typescript',
    background: '#1A3555'
  },
  Tailwind: {
    name: 'si-tailwindcss',
    background: '#176683'
  },
  ReactRouter: {
    name: 'si-reactrouter',
    background: '#8F2F3A'
  },
  BootStrap: {
    name: 'bi-bootstrap-fill',
    background: '#4F0BC0'
  },
  AntDesign: {
    name: 'si-antdesign',
    background: '#0A4F9E'
  },
  MySQL: {
    name: 'co-mysql',
    background: '#013A56'
  },
  SQLite: {
    name: 'si-sqlite',
    background: '#042B40'
  },
  SQLServer: {
    name: 'si-microsoftsqlserver',
    background: '#9C1C20'
  },
  Express: {
    name: 'si-express',
    background: '#1F1F1F'
  },
  Jest: {
    name: 'gi-jester-hat',
    background: '#602D3F'
  },
  Cypress: {
    name: 'si-cypress',
    background: '#2f363D'
  },
  Redux: {
    name: 'co-redux',
    background: '#3E2A74'
  },
  SemanticUI: {
    name: 'si-semanticuireact',
    background: '#0E3C44'
  },
  Docker: {
    name: 'co-docker',
    background: '#102A3E'
  },
  Figma: {
    name: 'fa-figma',
    background: '#4A2318'
  },
  NextJS: {
    name: 'co-next-js',
    background: '#3A3A3A'
  },
  HTML: {
    name: 'co-html5-shield',
    background: '#4A201A'
  },
  MongoDB: {
    name: 'co-mongodb',
    background: '#1A3626'
  }

}

export const PROJECTS: Project[] = [
  {
    name: 'Strava app',
    cover: {
      alt: `Strava app project images`,
      md: {
        coverUrl: '/project-imgs-md/StravaApp.webp',
        charCoverUrl: '/project-imgs-md/StravaAppChar.webp'
      },
      sm: {
        coverUrl: '/project-imgs-sm/StravaApp.webp',
        charCoverUrl: '/project-imgs-sm/StravaAppChar.webp',
      }
    },
    description: 'Mobile application that implements the authentication flow described in the Strava devs documentation, obtains daily and monthly activities, and user statistics. Store tokens securely with expo-secure-store and refresh them periodically.',
    icons: [
      ico.TanStack, ico.CSS, ico.JS, ico.TS, ico.Zustand, ico.React, ico.RNExpo, ico.NodeJS
    ],
    links: [
      {
        name: 'Strava api docs',
        url: 'https://developers.strava.com/'
      },
      {
        name: 'Repository',
        url: 'https://github.com/npminit-dev/strava_app.git'
      }
    ]
  },
  {
    name: 'NutriDash (In progress)',
    cover: {
      alt: `NutriDash project images`,
      md: {
        coverUrl: '/project-imgs-md/NutriDash.webp',
        charCoverUrl: '/project-imgs-md/NutriDashChar.webp'
      },
      sm: {
        coverUrl: '/project-imgs-sm/NutriDash.webp',
        charCoverUrl: '/project-imgs-sm/NutriDashChar.webp',
      }
    },
    description: 'Calorie tracking and nutrition information app built with React Native and Expo. It uses SQLite and complex queries to obtain the necessary data, it does not require an internet connection. This application is internationalized with the i18next library',
    icons: [
      ico.RNExpo, ico.TanStack, ico.Tailwind, ico.React, ico.RNExpo, ico.CSS, ico.JS, ico.TS, ico.SQLite
    ],
    links: [
      {
        name: 'Repository',
        url: 'https://github.com/npminit-dev/NutriDash.git'
      },
      {
        name: 'Sample',
        url: 'https://postimg.cc/K3K1VG7m'
      }
    ]
  },
  {
    name: 'ApoloWeb',
    cover: {
      alt: `ApoloWeb project images`,
      md: {
        coverUrl: '/project-imgs-md/ApoloWeb.webp',
        charCoverUrl: '/project-imgs-md/ApoloWebChar.webp'
      },
      sm: {
        coverUrl: '/project-imgs-sm/ApoloWeb.webp',
        charCoverUrl: '/project-imgs-sm/ApoloWebChar.webp',
      }
    },
    description: 'Technical test that implements React as a UI library, using optimization techniques such as code splitting and lazy loading. It uses IndexedDB to store logs and consumes the Rick And Morty API using custom hooks. Implements an advanced filter system using regular expressions.',
    icons: [
      ico.JS, ico.CSS, ico.HTML, ico.Tailwind, ico.React, ico.NodeJS, ico.ReactRouter
    ],
    links: [
      {
        name: 'Repository',
        url: 'https://github.com/npminit-dev/apoloweb.git'
      },
      {
        name: 'Deploy',
        url: 'https://apolowebtest.netlify.app/home'
      },
      {
        name: 'Rick and Morty api',
        url: 'https://rickandmortyapi.com/'
      }
    ]
  },
  {
    name: 'SavoryHaven',
    cover: {
      alt: `SavoryHaven project images`,
      md: {
        coverUrl: '/project-imgs-md/SavoryHaven.webp',
        charCoverUrl: '/project-imgs-md/SavoryHavenChar.webp'
      },
      sm: {
        coverUrl: '/project-imgs-sm/SavoryHaven.webp',
        charCoverUrl: '/project-imgs-sm/SavoryHavenChar.webp',
      }
    },
    description: 'Technical test using React and tailwind for UI design, uses browser local storage to save product and shopping cart data. Use optimization techniques to maximize performance.',
    icons: [
      ico.HTML, ico.CSS, ico.JS, ico.TS, ico.Tailwind, ico.React, ico.ReactRouter
    ],
    links: [
      {
        name: 'Deploy',
        url: 'https://savoryhaven.pages.dev/home'
      }
    ]
  },
  {
    name: 'Bitnovo',
    cover: {
      alt: `Bitnovo project images`,
      md: {
        coverUrl: '/project-imgs-md/Bitnovo.webp',
        charCoverUrl: '/project-imgs-md/BitnovoChar.webp'
      },
      sm: {
        coverUrl: '/project-imgs-sm/Bitnovo.webp',
        charCoverUrl: '/project-imgs-sm/BitnovoChar.webp',
      }
    },
    description: 'Mobile application created with React Native/Expo that allows payments from different FIAT currencies to different bitcoin tokens. Makes extensive use of Expo APIs, such as Linking (to share paid links) and third-party libraries (such as react-native-qrcode-svg)',
    icons: [
      ico.React, ico.RNExpo, ico.TS, ico.JS, ico.CSS, ico.Redux
    ],
    links: [
      {
        name: 'Payment test',
        url: 'https://test.xrptoolkit.com/connect-wallet'
      },
      {
        name: 'Generate credentials',
        url: 'https://xrpl.org/resources/dev-tools/xrp-faucets'
      },
      {
        name: 'Repository',
        url: 'https://github.com/npminit-dev/bitnovo.git'
      }
    ]
  },
  {
    name: 'Carnes Pampeanas (in progress)',
    cover: {
      alt: `Carnes Pampeanas project images`,
      md: {
        coverUrl: '/project-imgs-md/CarnesPampeanas.webp',
        charCoverUrl: '/project-imgs-md/CarnesPampeanasChar.webp'
      },
      sm: {
        coverUrl: '/project-imgs-sm/CarnesPampeanas.webp',
        charCoverUrl: '/project-imgs-sm/CarnesPampeanasChar.webp',
      }
    },
    description: 'Emulation of a full stack e-commerce app. For the backend it uses NodeJS and Express, password encryption with the bcrypt library, strong typing, and a modular design pattern. For the frontend it uses React, Router-Dom, Hook-Form and TypeScript. Implements a MySQL database.',
    icons: [
      ico.HTML, ico.CSS, ico.JS, ico.React, ico.ReactRouter, ico.NodeJS, ico.Express, ico.TS, ico.MySQL
    ],
    links: [
      {
        name: 'Repository (Frontend)',
        url: 'https://github.com/npminit-dev/miAppRepoFront.git'
      },
      {
        name: 'Repository (Backend)',
        url: 'https://github.com/npminit-dev/CarnesPampeanas.git'
      }
    ]
  },
  {
    name: 'VueJS resume',
    cover: {
      alt: `VueJS resume project images`,
      md: {
        coverUrl: '/project-imgs-md/VueJSResume.webp',
        charCoverUrl: '/project-imgs-md/VueJSResumeChar.webp'
      },
      sm: {
        coverUrl: '/project-imgs-sm/VueJSResume.webp',
        charCoverUrl: '/project-imgs-sm/VueJSResumeChar.webp',
      }
    },
    description: 'A repository where the various concepts of the VueJS library are explained in a simple but in-depth way. It ranges from template syntax, through advanced concepts of components, reactivity, directives and plugins, ending with built-in components and reusability.',
    icons: [
      ico.Vue, ico.HTML, ico.CSS, ico.JS
    ],
    links: [
      {
        name: 'Repository',
        url: 'https://github.com/npminit-dev/VueJS-resumen.git'
      }
    ]
  },
  {
    name: 'Sec&Sys technical test',
    cover: {
      alt: `Sec&Sys technical test project images`,
      md: {
        coverUrl: '/project-imgs-md/SecAndSys.webp',
        charCoverUrl: '/project-imgs-md/SecAndSysChar.webp'
      },
      sm: {
        coverUrl: '/project-imgs-sm/SecAndSys.webp',
        charCoverUrl: '/project-imgs-sm/SecAndSysChar.webp',
      }
    },
    description: 'A project where UX/UI principles are applied, strongly typed code and a pleasant interface and impressive animations. Fully responsive.',
    icons: [
      ico.HTML, ico.CSS, ico.JS, ico.TS, ico.NextJS, ico.Jest
    ],
    links: [
      {
        name: 'Deploy',
        url: 'https://sec-sys-tecnical-test.vercel.app/'
      },
      {
        name: 'Repo',
        url: 'https://github.com/npminit-dev/Sec-SysTecnicalTest.git'
      }
    ]
  },
  {
    name: 'ByteBlog',
    cover: {
      alt: `ByteBlog project images`,
      md: {
        coverUrl: '/project-imgs-md/ByteBlog.webp',
        charCoverUrl: '/project-imgs-md/ByteBlogChar.webp'
      },
      sm: {
        coverUrl: '/project-imgs-sm/ByteBlog.webp',
        charCoverUrl: '/project-imgs-sm/ByteBlogChar.webp',
      }
    },
    description: 'Fullstack application for managing blogs related to computing and technology. The stack is: React-ExpressJS-MongoDB. Implement e2e tests with Cypress',
    icons: [
      ico.HTML, ico.CSS, ico.JS, ico.SemanticUI, ico.React, ico.ReactRouter, ico.NodeJS, ico.Express, ico.MongoDB, ico.Cypress
    ],
    links: [
      {
        name: 'Repository',
        url: 'https://github.com/npminit-dev/ByteBlog.git'
      }
    ]
  },
  {
    name: 'NASA Apod',
    cover: {
      alt: `NASA Apod project images`,
      md: {
        coverUrl: '/project-imgs-md/NasaApod.webp',
        charCoverUrl: '/project-imgs-md/NasaApodChar.webp'
      },
      sm: {
        coverUrl: '/project-imgs-sm/NasaApod.webp',
        charCoverUrl: '/project-imgs-sm/NasaApodChar.webp',
      }
    },
    description: "'Bare' React Native application that makes use of the Astronomical Photo of the Day (APOD) API belonging to NASA.",
    icons: [
      ico.React, ico.TS, ico.Jest
    ],
    links: [
      {
        name: 'Repository',
        url: 'https://github.com/npminit-dev/NASA-App.git'
      },
      {
        name: 'APOD api website',
        url: 'https://data.nasa.gov/Space-Science/Astronomy-Picture-of-the-Day-API/ez2w-t8ua/about_data'
      }
    ]
  },
  {
    name: 'DailyFuel',
    cover: {
      alt: `DailyFuel project images`,
      md: {
        coverUrl: '/project-imgs-md/DailyFuel.webp',
        charCoverUrl: '/project-imgs-md/DailyFuelChar.webp'
      },
      sm: {
        coverUrl: '/project-imgs-sm/DailyFuel.webp',
        charCoverUrl: '/project-imgs-sm/DailyFuelChar.webp',
      }
    },
    description: "Simple daily meal log recording, deleting and modifying app using Expo and React Native.",
    icons: [
      ico.React, ico.RNExpo
    ],
    links: [
      {
        name: 'Repository',
        url: 'https://github.com/npminit-dev/DailyFuel.git'
      }
    ]
  }
]

