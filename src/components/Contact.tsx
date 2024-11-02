import {motion} from 'framer-motion'
const Contact = () => {
  return (
    <motion.div
        initial={{opacity:0, y:100}}
        whileInView={{opacity:1, y:0}}
        transition={{duration:2}}
    id='contact' className='flex flex-col gap-10 justify-center items-center w-full min-h-[80vh]'>
        <h1 className="md:text-5xl text-4xl bg-gradient-to-r from-blue-500 to-blue-700 text-transparent bg-clip-text ">Get in Touch</h1>
        <p className='text-center items-center justify-center flex md:text-xl text-lg font-semibold text-slate-500'>Want to chat? Send me an E-mail through this button and I'll respond whenever I can.</p>
        <button className=' text-white bg-gradient-to-r from-blue-500 to-pink-700 p-3 rounded-2xl opacity-85 transition-all duration-300 hover:scale-105 hover:opacity-100'
        style={{
            backgroundSize: "300% 300%",
            animation: 'gradient-animation 5s ease infinite'
        }}
        >Contact Me
        <style>
                {`
                    @keyframes gradient-animation {
                        0% {
                            background-position: 0% 50%;
                        }
                        50% {
                            background-position: 100% 50%;
                        }
                        100% {
                            background-position: 0% 50%;
                        }
                    }
                `}
            </style>
        </button>
    </motion.div>
  )
}

export default Contact
