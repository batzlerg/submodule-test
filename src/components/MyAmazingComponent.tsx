import React from 'react'
 
interface MyAmazingComponentProps {
    message: string;
}

const MyAmazingComponent: React.FC<MyAmazingComponentProps> = (props) => {
  return (
    <h1 className="big-call-to-action">
      <p>{props.message}</p>
    </h1>
  )
}

export default MyAmazingComponent