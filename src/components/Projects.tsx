import { ReactNode } from "react"
import project1 from "../assets/1.png"
import project2 from "../assets/2.png"
import project3 from "../assets/3.png"
import project4 from "../assets/4.png"
import { motion } from 'framer-motion'

interface Project {
    image: string,
    title: string,
    description: string,
    technologies: string[]
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
        title: "Habit Tracker",
        description: "This is a dummy project. Not a real project. So this section will be soon replaced by a real project. Please standby till then. Have a good day!",
        technologies: ["HTML", "CSS", "Javascript", "MySQL"]
    },
    {
        image: project2,
        title: "Tracker Habit",
        description: "This is a dummy project. Not a real project. So this section will be soon replaced by a real project. Please standby till then. Have a good day!",
        technologies: ["HTML", "CSS", "Javascript", "MySQL"]
    },
    {
        image: project3,
        title: "Binance",
        description: "This is a dummy project. Not a real project. So this section will be soon replaced by a real project. Please standby till then. Have a good day!",
        technologies: ["HTML", "CSS", "Javascript", "MySQL"]
    },
    {
        image: project4,
        title: "Bybit",
        description: "This is a dummy project. Not a real project. So this section will be soon replaced by a real project. Please standby till then. Have a good day!",
        technologies: ["HTML", "CSS", "Javascript", "MySQL"]
    },
]

const ScrollReveal = ({children}: ScrollProps) => {
    return (
        <motion.div
        initial={{opacity:0, y:100}}
        whileInView={{opacity:1, y:0}}
        viewport={{once:true}}
        transition={{duration:0.8}}
        >
            {children}
        </motion.div>
    )
}

const ProjectCard = ({ project }: ProjectProps) => {
    return (
        <ScrollReveal>
            <div className="flex flex-col items-center gap-8 md:flex-row md:gap-24">
                <img src={project.image} alt="" className="w-full cursor-pointer rounded-2xl transition-all duration-300 hover:scale-105 md:w-[300px]"/>

                <div className="flex flex-col gap-5">
                    <div className="flex flex-col gap-3 ">
                        <div className="text-xl font-semibold">{project.title}</div>
                        <p className="text-gray-400">{project.description}</p>
                    </div>

                    <div className="flex flex-wrap gap-5">
                        {project.technologies.map((tech:string, index:number) => (
                            <span key={index} className=" rounded-lg bg-black p-1">{tech}</span>
                        ))}
                    </div>
                </div>
            </div>
        </ScrollReveal>
    )
}

const Projects = () => {
  return (
    <div id="projects" className="flex min-h-screen w-full flex-col items-center justify-center gap-16 p-4 md:px-14 md:py-24">
        <ScrollReveal>
            <h1 className="text-4xl font-light text-white md:text-6xl">My Projects</h1>
        </ScrollReveal>
        <div className="flex w-full max-w-[1000px] flex-col gap-16 text-white">
            {projectsData.map((project, index) => (
                <ProjectCard key={index} project={project}/>
            ))}
        </div>
    </div>
  )
}

export default Projects
