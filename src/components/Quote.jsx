import React from 'react';
import {motion} from 'framer-motion';

const Quote = () => {
  return (
    <div className='grid gap-24 pb-60'>
        <motion.div 
        initial= {{opacity:0, translate:"50%"}}
        whileInView={{opacity:1, translate:0}}
        transition={{duration:2}}
        className='text-6xl leading-relaxed'>
            If you have an idea,<br/> business, or investment <br/> that you think I could help with, <br/>please drop me a line...
        </motion.div>
        <motion.h3
        initial= {{opacity:0, scale:0}}
        whileInView={{opacity:1, scale:1}}
        transition={{duration:2}}
        className='text-7xl font-bold text-center cursor-pointer
            bg-gradient-to-tr from-emerald-700 to-cyan-500 text-transparent bg-clip-text inline-block
        '>
            hello@BansalBhavya.io
        </motion.h3>
        <motion.div 
        initial= {{opacity:0, translate:"-50%"}}
        whileInView={{opacity:1, translate:0}}
        transition={{duration:2}}
        className='text-right text-xl leading-10 w-11/12 pl-96 mx-auto grid gap-10'>
            <div>
                I work with a lot of super-talented people. Even if it's something I might not be able to directly help with, I may be able to recommend someone from my network of those amazing contacts.
            </div>
            <div>
                You can also find me on
                <span className='bg-gradient-to-tr from-emerald-700 to-blue-500 text-transparent bg-clip-text inline-block cursor-pointer'>&nbsp;Linkedin</span> or 
                <span className='bg-gradient-to-tr from-emerald-700 to-blue-500 text-transparent bg-clip-text inline-block cursor-pointer'>&nbsp;Instagram</span>.
            </div>
        </motion.div>
    </div>
  )
}

export default Quote