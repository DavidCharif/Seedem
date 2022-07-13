import React from 'react'
import illustration from '../images/illustration-working.svg'


const Heading = () => {
  return (
    <div
      className="flex flex-col-reverse items-center justify-between sm:mt-10 lg:ml-40 md:ml-30 sm:ml-10 sm:flex-row">
      <div
        className="flex flex-col w-5/5 sm:w-3/5"
      >
        <h1 className="text-veryDarkViolet text-4xl font-bold text-center leading-[1.2] sm:text-[78px] sm:text-left">
          More than just shorter links
        </h1>
        <p className="text-neutralGrayishViolet text-left w-4/5 text-2xl leading-relaxed">
          Build your brand's recognition and get detailed insights on how your links are performing.
        </p>
        <button type='button' className="btn btn-primary">Get Started</button>
      </div>
      <div className='h-96 overflow-hidden w-full'>
        <img src={illustration} alt="illustration" className='h-full float-right'/>
      </div>
    </div>
  )
}

export default Heading