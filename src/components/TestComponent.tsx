import React from 'react'
 
interface TestComponentProps {
    title: string;
}

const TestComponent: React.FC<TestComponentProps> = (props) => {
  return (
    <h3>
      <p>
      this is the test, with a title of {props.title}
      </p>
    </h3>
  )
}

export default TestComponent