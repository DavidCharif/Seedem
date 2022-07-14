import React from 'react'

interface Props {
  title: string
  description: string
  image: string
  marginTop: number
}
// 
// const Card = ({title, description, image} : Props) => {
//   console.log('Card')
//   return (
//     <div>
//       <h1>{title}</h1>
//       <p>{description}</p>
//       <img src={image} alt="illustration" />      
//     </div>
//   )
// }

const Card: React.FC<Props> = ({ title, description, image, marginTop }) => {
  return (
    <div
      className={`flex flex-col items-center gap-3 h-fit sm:w-4/5 bg-white px-10 py-10 z-10`}
      style={{
        marginTop: marginTop*15 + 'px'
      }}
      >
      <img className='bg-veryDarkBlue rounded-full p-5 relative bottom-20' src={image} alt="illustration" />
      <h4
        className='font-bold text-veryDarkViolet text-2xl leading-tight'
      >{title}</h4>
      <p
        className='text-neutralGrayishViolet'
      >{description}</p>
    </div>
  )
}

export default Card