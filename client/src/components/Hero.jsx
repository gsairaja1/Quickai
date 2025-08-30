import React from 'react';
import gradientBackground from '../assets/gradientBackground.png';
import { useNavigate } from 'react-router-dom';
import { assets } from '../assets/assets';

const Hero = () => {
  const navigate = useNavigate()
  return (
    <div
      style={{ backgroundImage: `url(${gradientBackground})` }}
      className="px-4 sm:px-20 xl:px-32 relative inline-flex flex-col w-full
      justify-center bg-cover bg-no-repeat min-h-screen"
    >
      <div className="text-center mb-6">
        <h1 className="text-3xl sm:text-5xl md:text-6xl 2xl:text-7xl
        font-semibold mx-auto leading-[1.2]">Create amazing content<br /> with <span className='text-primary'>AI tools</span></h1>
        <p className='mt-4 max-w-xs sm:max-w-lg 2xl:max-w-xl m-auto
        max-sm:text-xs text-gray-600'>
          Transform your content creation with our suite of premium AI tools.
          Write articles, generate images, and enhance your workflow.
        </p>
      </div>

      <div className='flex flex-wrap justify-center gap-4 text-sm:text-xs'>
        <button onClick={() => navigate('/ai')} className='bg-primary text-white py-2 px-4 rounded-md'>Start creating now</button>
        <button className='border border-primary text-primary py-2 px-4 rounded-md'>Watch demo</button>

      </div>


      <div className='flex items-center gap-4 mt-8 mx-auto text-gray-600'>
        <img src={assets.user_group} alt="" className='h-8' /> Trusted by over 10k people
      </div>

    </div>
  );
};

export default Hero;
