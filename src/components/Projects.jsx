import React from 'react';
import {motion} from 'framer-motion';
import { useState } from 'react';

const Projects = () => {
    
    const items = [
        { text: "SocialVerse", image: "https://img.freepik.com/free-vector/flat-travel-landing-page_23-2149022253.jpg?t=st=1732191582~exp=1732195182~hmac=eb990bd9d1d55d70b0cd22d08837d90c02d9c1529c0e60edc2bfad4524f70e47&w=1060" },
        { text: "Web3Points", image: "https://img.freepik.com/free-psd/lifestyle-template-design_23-2150299040.jpg?t=st=1732192390~exp=1732195990~hmac=7516c8e84d00886bd6d5c46eee30f7e4c2d86836d27c14aff20e92bd4a4add44&w=1380" },
        { text: "Aiccelerator", image: "https://img.freepik.com/free-psd/hand-drawn-business-strategy-landing-page-template_23-2150094704.jpg?t=st=1732192454~exp=1732196054~hmac=f910ad5c35c6eabeb5928c59aed9c7b600ce5a17166eded36772f5c7006fb232&w=1380" },
        { text: "Startup Colleges", image: "https://img.freepik.com/free-vector/landing-page_23-2148120374.jpg?t=st=1732192478~exp=1732196078~hmac=f5f041af679a1f464fe21a519316e0c746453d141c859c552b2a6c8741401366&w=740" },
    ];
    
    const [hoveredIndex, setHoveredIndex] = useState(null);
      
    
  return (
    <div>
        <motion.div 
            initial= {{opacity:0, rotateX:"90deg"}}
            whileInView={{opacity:1, rotateX:0}}
            transition={{duration:2}}
            className='text-4xl text-red-500 mb-7 w-1/2'>
            View the case studies of my some
            <span className='bg-gradient-to-tr from-red-600 to-orange-500 text-transparent inline-block bg-clip-text'> projects</span>
        </motion.div> 
        <div className='text-center'>
            <hr className='border-1 border-gray-300'/>
            <div className="container grid grid-cols-2 gap-2">
                {items.map((item, index) => (
                    <motion.div
                        initial= {{opacity:0, scale:0}}
                        whileInView={{opacity:1, scale:1}}
                        transition={{duration:2}}
                    className="hover-item text-5xl tracking-[0.5rem]"
                    key={index}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    >
                    <h3 className="p-3 cursor-pointer text-[#333] py-8 font-bold">{item.text}</h3>
                    {hoveredIndex === index && (
                        <img src={item.image} alt={`Floating ${index}`} className="floating-image" />
                    )}
                    <hr className='border-1 border-gray-300'/>
                    </motion.div>
                ))}
            </div>        
        </div>
    </div>
  )
}

export default Projects