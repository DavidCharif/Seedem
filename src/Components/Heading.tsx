import React from 'react'
import illustration from '../images/illustration-working.svg'


const Heading = () => {
  return (
    <div
      className="flex flex-col-reverse items-center justify-between sm:mt-10 lg:ml-40 md:ml-30 sm:ml-10 sm:flex-row">
      <div
        className="p-6 flex flex-col gap-3 w-full sm:w-4/5"
      >
        <h1 className="text-veryDarkViolet text-4xl font-extrabold text-center leading-[1.2] sm:text-[78px] sm:text-left">
          More than just shorter links
        </h1>
        <p className="text-neutralGrayishViolet text-center text-1xl leading-relaxed sm:text-left sm:w-4/5 sm:text-2xl">
          Build your brand's recognition and get detailed insights on how your links are performing.
        </p>
        <button type='button' className="bg-primaryCyan w-3/5 py-3 mt-3 font-bold text-white rounded-full mx-auto">Get Started</button>
      </div>
      <div className='h-96 overflow-hidden w-full'>
        <img src={illustration} alt="illustration" className='h-full float-right' />
      </div>
    </div>
  )
}

export default Heading