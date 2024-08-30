import project1 from "../assets/projects/project1.jpg";
import project2 from "../assets/projects/project2.jpg";
import project3 from "../assets/projects/project3.jpg";
import project4 from "../assets/projects/project4.jpg";

export const HERO_CONTENT = `I'm a third-year BCA student with a passion for problem-solving and a love for all things tech. I'm always eager to learn and explore new tech stacks, whether it's building sleek websites or diving deep into the latest frameworks. With a knack for web development and a collaborative spirit, I thrive in team environments where creativity meets code.`;

export const ABOUT_TEXT = `I'm a MERN-stack web developer, currently diving into app development, always pushing myself to learn something new every day. I've participated in several hackathons, collaborating with teams to bring innovative ideas to life. When I'm not coding, you'll find me expressing my creativity through shuffle and classical dance—because, for me, it's all about balance and rhythm. Let's create, innovate, and groove to the beat of our passions!`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];

export const PROJECTS = [
  {
    title: "BoundWords",
    image: project1,
    description:
      "A visually appealing bookstore app showcasing an intuitive user interface with features including book listings, advanced search and filtering, and user authentication. ",
    technologies: [ "Tailwind", "React", "Node.js", "MongoDB"],
    githubLink:"https://github.com/Rimpyyadav/BoundWords"
  },
  {
    title: "Portfolio",
    image: project2,
    description:
       "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["React", "Tailwind", "Framer motion"],
    githubLink:"https://github.com/Rimpyyadav/Portfolio"
  },
  {
    title: "Youtube" ,
    image: project3,
    description:
      "Designed to replicate the core features of YouTube, it offers a seamless experience for discovering and watching videos.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
    githubLink:"https://github.com/Rimpyyadav/yt_clone"

  },
  {
    title: "Fitrack",
   image: project4,
    description:
    "The app offers a user-friendly interface for tracking exercise routines, setting goals, and staying motivated.",
    technologies: [ "Tailwind", "React", "Node.js",],
    githubLink:"https://github.com/Rimpyyadav/Fitrack"
  },
];

export const CONTACT = {
  address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "+12 4555 666 00 ",
  email: "me@example.com",
};