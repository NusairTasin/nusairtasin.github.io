import { ReactNode } from "react";
import project1 from "../assets/pingpong1.png";
import project2 from "../assets/2.png";
import project3 from "../assets/3.png";
import project4 from "../assets/4.png";
import { motion } from "framer-motion";

interface Project {
  image: string;
  title: string;
  description: string;
  technologies: string[];
  path: string;
}
interface ScrollProps {
  children: ReactNode;
}
interface ProjectProps {
  project: Project;
}

const projectsData = [
  {
    image: project1,
    title: "Ping Pong",
    description:
      "My partner Adeeb and I created a 2-player ping pong game for our Structured Programming Course project. This project marked my first experience in game development, and I thoroughly enjoyed the process of bringing our ideas to life!",
    technologies: ["Raylib", "C++"],
    path: "https://github.com/NusairTasin/Ping-Pong",
  },
  {
    image: project2,
    title: "Tracker Habit",
    description:
      "This is a dummy project.",
    technologies: ["HTML", "CSS", "Javascript", "MySQL"],
    path: "#contact",
  },
  {
    image: project3,
    title: "Binance",
    description:
      "This is a dummy project.",
    technologies: ["HTML", "CSS", "Javascript", "MySQL"],
    path: "https://twitter.com",
  },
  {
    image: project4,
    title: "Bybit",
    description:
      "This is a dummy project.",
    technologies: ["HTML", "CSS", "Javascript", "MySQL"],
    path: "#link",
  },
];

const ScrollReveal = ({ children }: ScrollProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {children}
    </motion.div>
  );
};

const ProjectCard = ({ project }: ProjectProps) => {
  return (
    <ScrollReveal>
      <div className="flex flex-col items-center gap-8 md:flex-row md:gap-24">
        <img
          src={project.image}
          alt=""
          className="w-full cursor-pointer rounded-2xl transition-all duration-300 hover:scale-105 md:w-[300px]"
        />

        <div className="flex flex-col gap-5 justify-center items-center md:justify-start md:items-start">
          <div className="flex flex-col gap-3 ">
            <div className="text-xl font-semibold">{project.title}</div>
            <p className="text-gray-400">{project.description}</p>
          </div>

          <div className="flex flex-wrap gap-5">
            {project.technologies.map((tech: string, index: number) => (
              <>
                <span
                  key={index}
                  className="relative group rounded-lg p-1 transition-all duration-300"
                >
                  {tech}
                  <span className="left-0 bottom-0 h-1 w-full bg-gradient-to-r from-blue-500 to-purple-600 opacity-80 rounded-xl transform -translate-x-[10%] transition-transform duration-300 group-hover:translate-x-0 group-hover:absolute"></span>
                </span>
              </>
            ))}
          </div>

          <div>
            <a href={project.path} target="_blank">
              <button className="flex justify-center items-center gap-1 hover:bg-gray-900 p-2 rounded-xl transition-all duration-300 bg-black border border-purple-950">
                Github
              </button>
            </a>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
};

const Projects = () => {
  return (
    <div
      id="projects"
      className="flex min-h-screen w-full flex-col items-center justify-center gap-16 p-4 md:px-14 md:py-24"
    >
      <ScrollReveal>
        <h1 className="text-4xl font-light text-white md:text-6xl">
          My Projects
        </h1>
      </ScrollReveal>
      <div className="flex w-full max-w-[1000px] flex-col gap-16 text-white">
        {projectsData.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
