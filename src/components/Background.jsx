import React from 'react';
import {motion} from 'framer-motion';

const Background = () => {
  return (
    <div className='flex p-2'>
        <motion.div
        initial= {{opacity:0, translateY:"-50%"}}
        whileInView={{opacity:1, translateY:0}}
        transition={{duration:2}}
        >
            <div className='text-6xl w-1/2 py-10'>
            What's my <span className='bg-gradient-to-br from-green-500 to-teal-600 text-transparent inline-block bg-clip-text'>background?</span>  
            </div>
        </motion.div>
        
        <motion.div
        initial= {{opacity:0, translateY:"50%"}}
        whileInView={{opacity:1, translateY:0}}
        transition={{duration:1}}
         className='text-xl flex flex-col gap-5'>
            <div>
             <h3 class="">
                        Apr 2024 - Present
                    </h3>
                    <h2 class="">
                        Chief Technology Officer
                    </h2>
                    <p class="">
                        Persist Ventures . Hybrid
                    </p>
            </div>
            <div>
                <h3 class=" ">
                        Nov 2023 - Present
                </h3>
                <h2 class="">
                    CTO @ FaceSearchAI
                </h2>
                <p class="">
                    Persist Ventures . Remote
                </p>
            </div>
            <div>
                <h3 class=" ">
                    Oct 2023 - Present
                </h3>
                <h2 class="">
                    Full Stack Engineer
                </h2>
                <p class="">
                    Persist Ventures . Remote
                </p>
            </div>
            <div>
                <h3 class=" ">
                    Aug 2023 - Oct 2023
                </h3>
                <h2 class="">
                    AI Software Developer
                </h2>
                <p class="">
                    HeyDaw Technologies · Internship
                </p>
            </div>
            <div>
                <h3 class=" ">
                    May 2022 - Apr 2023
                </h3>
                <h2 class="">
                    Software Engineer
                </h2>
                <p class="">
                    Telaverge Communications · Internship
                </p>
            </div>
            <div>
                <h3 class=" ">
                    May 2018 - Apr 2022
                </h3>
                <h2 class="">
                    B. Tech. Computer Science
                </h2>
                <p class="">
                    Dr. A.P.J. Abdul Kalam Technical University
                </p>
            </div>
        </motion.div>
    </div>  
  )
}

export default Background