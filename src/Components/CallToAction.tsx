import React from 'react'

const CallToAction = () => {
  return (
    <div className='flex relative items-center h-56 sm:h-[500px] lg:w-screen flex-col'>
    <div className='w-screen bg-primaryViolet h-full flex flex-col'>
      <img src='src/images/bg-boost-desktop.svg' alt='destop' className='h-full object-cover' />
    </div>
    <div className='flex justify-center absolute top-[33%]'>
      <p className='text-white font-bold text-2xl sm:text-6xl lg:bottom-52'>Boost your links today</p>
      <button type='button' className='px-5 py-5 mt-12 rounded-full text-white font-bold absolute  bg-primaryCyan'>Get Started</button>
      </div>
      </div>
  )
}

export default CallToAction