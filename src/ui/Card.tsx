import React from 'react'

interface Props {
  title: string
  description: string
  image: string
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

const Card : React.FC<Props> = ({title, description, image}) => {
  console.log('Card')
  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
      <img src={image} alt="illustration" />
    </div>
  )
}

export default Card