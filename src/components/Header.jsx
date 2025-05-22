import React, { useContext } from 'react'
import {assets} from "../assets/assets"
import { delay, motion } from "motion/react"
import  {AppContext} from '../context/AppContext'
import {useNavigate} from 'react-router-dom'
import { Sparkles } from 'lucide-react'
import { Badge } from './ui/badge'

const Header = () => {

  const {user, setShowLogin} = useContext(AppContext)
  const navigate = useNavigate();

  const onClickHandler = ()=>{

    if(user){
      navigate('/result')
    }
    else{
      setShowLogin(true);
    }

  }

  return (
    <motion.div className='flex flex-col items-center justify-center text-center my-20'
    initial={{opacity:0.2, y:100}}
    transition={{duration:1}}
    whileInView={{opacity:1,y:0}}
    viewport={{once:true}}
    >
        {/* <motion.div 
         initial={{opacity:0, y:-20}}
        animate={{opacity:1,y:0}}
         transition={{delay:0.2,duration:0.8}}

         className='text-stone-500 inline-flex text-center gap-2 bg-white px-6 py-1 rounded-full border border-neutral-500'>
            <p>Best text to image generator</p>
            <img src={assets.star_icon}/>
        </motion.div> */}

        <motion.div  initial={{opacity:0, y:-20}}
        animate={{opacity:1,y:0}}
         transition={{delay:0.2,duration:0.8}} className='relative p-[2px] overflow-hidden rounded-full bg-linear-to-r from-blue-200 via-sky-500 to-indigo-800 animate-gradient-x group'>
                    <Badge
                    variant={'secondary'}
                    className='relative px-6 py-2 text-base font-medium bg-white rounded-full group-hover:bg-gray-50 transition-colors duration-200'
                    >
                      <div>

                   
                    <Sparkles className='h-6 w-6 mr-2 text-sky-600 animate-pulse'/>
                    </div>
                    <p className='text-base text-sky-600'>Best text to image generator</p>
                    </Badge>
                </motion.div>
        <motion.h1

           initial={{opacity:0}}
        animate={{opacity:1}}
         transition={{delay:0.4,duration:2}}

         className='text-4xl max-w-[300px] sm:text-7xl sm:max-w-[590px] mx-auto mt-10 text-center'>Turn text to <span className='text-sky-600'> image</span> in seconds.</motion.h1>

        <motion.p
          initial={{opacity:0, y:20}}
        animate={{opacity:1,y:0}}
         transition={{delay:0.6,duration:0.8}}

        className='text-center max-w-xl mx-auto mt-5'>
           Unleash your creativity with AI. Turn your imagination into visual
           art in seconds - just type, and watch the magic happen.     
        </motion.p>

        <motion.button

        onClick={onClickHandler}

        whileHover={{scale:1.05}}
        whileTap={{scale:0.95}}
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{default:{duration:0.5},opacity:{delay:0.8},duration:1}}
         className='text-white mt-6 text-base sm:text-lg lg:text-xl flex
              rounded-full px=8 sm:px-10 lg:px-12 py-6 sm:py-7 lg:py-4 gap-3
              lg:mt-16 bg-linear-to-r from-slate-900 to-sky-500
              hover:from-sky-500 hover:to-slate-900 hover:no-underline
              font-bold shadow-lg transition-all duration-300 text-nowrap '>Generate Images
            <img className='h-6' src={assets.star_group}/>
        </motion.button>

        <motion.div 
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{delay:1,duration:1}}
        className='flex flex-wrap justify-center mt-16 gap-3'>
            {Array(6).fill('').map((item,index)=>(
                    <motion.img
                    whileHover={{scale:1.05, duration:0.1}}
                     className=' rounded hover:scale-105 transition-all duration-300 cursor-pointer max-sm:w-10' 
                    src={index % 2 === 0 ? assets.sample_img_2 : assets.sample_img_1} alt='' 
                    key={index} width={70}/>
            ))}
        </motion.div>

        <motion.p 
          initial={{opacity:0}}
        animate={{opacity:1}}
         transition={{delay:1.2,duration:0.8}}
        className='mt-2 text-neutral-600'>Generated images from Vision.Ai</motion.p>

    </motion.div>
  )
}

export default Header