import {motion} from 'framer-motion';
import { BiLogoCPlusPlus, BiLogoJava, BiLogoJavascript, BiLogoMongodb, BiLogoNodejs, BiLogoPython, BiLogoReact, BiLogoTailwindCss, BiLogoTypescript } from 'react-icons/bi';

const techIstyle = 'cursor-pointer text-[80px] transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]';
const techItems = [
  {logo: <BiLogoTypescript className={`text-sky-500 ${techIstyle}`}/>},
  {logo: <BiLogoJavascript className={`text-orange-500 ${techIstyle}`}/>},
  {logo: <BiLogoReact className={`text-sky-500 ${techIstyle}`}/>},
  {logo: <BiLogoNodejs className={`text-green-500 ${techIstyle}`}/>},
  {logo: <BiLogoTailwindCss className={`text-sky-400 ${techIstyle}`}/>},
  {logo: <BiLogoMongodb className={`text-green-600 ${techIstyle}`}/>},
  {logo: <BiLogoCPlusPlus className={`text-blue-600 ${techIstyle}`}/>},
  {logo: <BiLogoJava className={`text-white ${techIstyle}`}/>},
  {logo: <BiLogoPython className={`text-yellow-500 ${techIstyle}`}/>}
  
] 

const Tech = () => {
  const variants = {
    hidden:{opacity:0, y:50},
    visible:{opacity:1, y:0}
  }

  return (
    <div id='tech' className='flex min-h-[70vh] w-full flex-col items-center justify-center gap-16 md:gap-32 '>
      <motion.h1
      variants={variants}
      initial="hidden"
      whileInView="visible"
      transition={{duration:0.5}}
      
      className='text-4xl text-white font-light md:text-6xl'>Technologies</motion.h1>

      <div className='flex flex-wrap items-center justify-center gap-10 p-5'>
        {techItems.map((link, index) => (
            <motion.div
            variants={variants}
            initial="hidden"
            whileInView="visible"
            transition={{duration:0.5}}

            key={index}
            >{link.logo}</motion.div>
          ))}
      </div>
    </div>
  )
}

export default Tech
