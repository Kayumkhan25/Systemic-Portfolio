import React from 'react';
import {motion} from 'framer-motion';

const Intro = () => {
  return (
    <motion.div
        initial= {{opacity:0.2, translateX:"50%"}}
        whileInView={{opacity:1, translateX:0}}
        transition={{duration:2}}
      >
        <div className='text-6xl pt-40 leading-relaxed'>
            Hey! It's 
            <h3 className='bg-gradient-to-tr from-cyan-500 from-30% to-teal-500 to-70% text-transparent bg-clip-text font-bold text-7xl'>
                Bhavya Bansal.
            </h3>
            I am Full Stack Engineer,<br/> CTO at FacesearchAI & <br /> Chief Technology Officer at <br/>
            <span className='bg-gradient-to-bl from-indigo-400 from-30% to-indigo-600 to-70% text-transparent bg-clip-text font-bold text-7xl'>Persist Ventures.</span>
        </div>
    </motion.div>
  )
}

export default Intro