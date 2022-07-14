import React from 'react'
import { dataColumns } from '../helpers/columns'
import Card from '../ui/Card'



const Features = () => {
  return (
    <section
      className={`bg-lightGray py-10 shadow-md h-fit sm:py-40 sm:px-24`}
    >
      <h2
        className='text-center text-veryDarkViolet text-3xl font-bold mt-5'
      >Advance Statistics</h2>
      <p className='text-center text-neutralGrayishViolet text-1xl mt-6'>
        Track how your links are performing across the web with our advanced statistics dashboard.
      </p>
      <div
        className='flex flex-col px-5 sm:gap-5 sm:flex-row sm:px-30 mt-20 sm:h-[600px] relative'
      >
        {
          dataColumns.map((data, key) => (
            <Card key={key} title={data.title} description={data.description} image={data.image} marginTop={key *4} />
          ))

        }

      <hr
        className='tranform-y-[50%] border-t-[15px] border-primaryCyan mt-10 w-4/5 absolute sm:top-[30%] z-1 mx-auto sm:translate-x-[20%]'
        />
      </div>
      </section>
  )
}

export default Features