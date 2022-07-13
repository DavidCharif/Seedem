import React from 'react'
import { dataColumns } from '../helpers/columns'
import Card from '../ui/Card'

const Features = () => {  
  return (
    <section
      className="bg-neutralGray w-full"
    >{
      dataColumns.map((data, key) => (
        <Card key={key} title={data.title} description={data.description} image={data.image} />
      ))
    }</section>
  )
}

export default Features