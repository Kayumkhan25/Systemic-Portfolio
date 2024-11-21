import React from 'react';
import {motion} from 'framer-motion';

const Philosophies = () => {
  return (
    <div className='flex p-2'>
        <motion.div
            initial= {{opacity:0, translate:"50%"}}
            whileInView={{opacity:1, translate:0}}
            transition={{duration:2}}
          className='text-6xl w-1/2 py-10'>
            My <span className='bg-gradient-to-l from-cyan-400 to-teal-600 text-transparent inline-block bg-clip-text'> Philosophies</span>  
        </motion.div>
        <motion.div
            initial= {{opacity:0, translate:"-50%"}}
            whileInView={{opacity:1, translate:0}}
            transition={{duration:2}}
         className='text-xl w-1/2 grid gap-12'>
           <div>
                I am driven by a philosophy that business should serve the creation of a better world. My belief in "good karma" as a catalyst for positive change is the cornerstone of my ethos.
           </div>
           <div>
                I previously pledged to donate 100% of my wealth by 2050, focusing on inspiring others to achieve their potential and contribute positively to society and am in the process of switching all my ownership in companies to be owned by Systemic Altruism, the non-profit I started.
           </div>
           <div>
                I've always been commited to helping the world, but one project made this internal fire go into hyper-drive. The act of building houses in Bangaldesh, for less than the price of some Dior shoes I owned made me redefine how I looked at status. One of my favorite ideas for systemic change became the idea of redefining status.
           </div>
           <div>
                Additionally, I am deeply invested in shaping future algorithms to empower rather than exploit, as outlined in my work with Empowerverse.
           </div>
        </motion.div>
    </div>
  )
}

export default Philosophies