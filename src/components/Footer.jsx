import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='flex items-center justify-between gap-4 py-3 mt-20 pb-10'>


       <h2 className="text-4xl font-extrabold cursor-pointer select-none hover:scale-105 transition duration-300">
<span className="bg-gradient-to-r from-sky-500 to-pink-400 bg-clip-text text-transparent">
  Vision.Ai
</span>
</h2>

        <p className='flex-1 border-l border-gray-400 pl-4 text-sm text-gray-500 max-sm:hidden'>Copyright @Naveen.dev | All right reserved</p>

        <div className='flex gap-2.5'>
            <img src={assets.facebook_icon} alt='' width={35}/>
            <img src={assets.twitter_icon} alt=''  width={35}/>
            <img src={assets.instagram_icon} alt=''  width={35}/>
        </div>
    </div>
  )
}

export default Footer