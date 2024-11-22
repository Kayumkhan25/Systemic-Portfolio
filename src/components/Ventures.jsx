import React from 'react';
import {motion} from 'framer-motion';

const Ventures = () => {
  return (
    <div className='flex p-2'>
        <motion.div 
        initial= {{opacity:0, scale:0}}
        whileInView={{opacity:1, scale:1}}
        transition={{duration:2}}
        className='text-6xl w-1/2 py-10'>
            My <span className='bg-gradient-to-l from-yellow-500 from-30% to-amber-500 to-70% text-transparent bg-clip-text font-bold '>Ventures</span>
        </motion.div>
        <motion.div 
         initial= {{opacity:0, rotateY:"90deg"}}
         whileInView={{opacity:1, rotateY:0}}
         transition={{duration:2}}
            className='text-xl w-1/2'>
            My entrepreneurial journey is highlighted by a series of successful ventures, Including:
            <ul style={{ listStyleType: 'circle', paddingLeft: '20px' }} className='mt-2'>

                <li>Establishing and exiting a consumer product manufacturing company.</li>
                <li>Founding and exiting a storage and fulfillment company.</li>
                <li>Launching a creator house in Los Angeles, featuring members from Hype House, Disney Channel, which was featured on Snapchat TV. At the time I also created the largest influencer sports league.</li>
                <li>Contributing to the meteoric rise of Pudgy Penguins, aiding in achieving over 8 billion views on Giphy,</li>
                <li>Consulting and marketing for renowned brands such as You.com, Sunrise Brands, Society Brands, and Brooke Burke Body, among others.
                </li>
            </ul>
        </motion.div>
    </div>
  )
}

export default Ventures