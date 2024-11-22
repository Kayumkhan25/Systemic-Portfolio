import React from 'react';
import {motion} from 'framer-motion';

const Drives = () => {
  return (
    <div className='flex p-2'>
        <motion.div className='text-6xl w-1/2 py-8'
            initial= {{opacity:0, scale:0}}
            whileInView={{opacity:1, scale:1}}
            transition={{duration:2}}
        >
            <div>What <span className='bg-gradient-to-tl from-rose-600 from-30% to-red-400 to-70% text-transparent bg-clip-text font-bold text-7xl'>Drives</span> me?</div>
        </motion.div>
        <motion.div className='w-1/2 flex flex-col gap-5 text-xl'
            initial= {{opacity:0, scale:0}}
            whileInView={{opacity:1, scale:1}}
            transition={{duration:2}}
        >
            <div>
                I was propelled by a passion for innovation and a vision for a greater world, knowing I could make a massive impact if I stayed true to that mission. This bold decision marked the beginning of an extraordinary career in technology and philanthropy. I view my life as potentially millennia long, and thus a century of commitment seems like nothing in the grand scheme.
            </div>
            <div>
                I am currently acting as the <b>Chief Technology Officer</b> of Persist Ventures. My expertise is within 1st principles thinking, growth hacking and leading leaders. My approach is a consistent attempt to blend entrepreneurial acumen with a deep commitment to build on what matters for the world at large. My long term goal is to create the most efficient and effective charity in the world and Persist Ventures acts as a PBO (Public Benefit Organization) that aligns with the world of venture capital.
            </div>
        </motion.div>
        
        
    </div>
  )
}

export default Drives