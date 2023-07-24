import React from 'react'

interface Props {
   name: string
}

const SecondComponent = (props: Props) => {
  return (
    <div>
      <p>My second component</p>
      <p>The name her is {props.name}</p>
    <hr />
    </div>
  )
}

export default SecondComponent