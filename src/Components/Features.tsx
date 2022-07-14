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
        className='flex flex-col px-5 sm:gap-3 sm:flex-row sm:px-30 mt-20 sm:h-[600px]'
      >
        {
          dataColumns.map((data, key) => (
            <Card key={key} title={data.title} description={data.description} image={data.image} marginTop={key *4} />
          ))

        }
      </div></section>
  )
}

export default Features