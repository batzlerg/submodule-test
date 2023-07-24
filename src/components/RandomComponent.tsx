import React from 'react'
 
interface RandomComponentProps {
    name: string;
}

const RandomComponent: React.FC<RandomComponentProps> = (props) => {
  return (<>
    <p>A random number for you.</p>
    <p>{Math.random()}</p></>
  )
}

export default RandomComponent