import React from 'react'

function GrandChildComponent(props) {
  return (
    <div>
        I am grandchild component.
        <ul>
        {props.names.map((name , index)=>(
            <li key={index}>{name}</li>
        ))}
    </ul>
    </div>
  )
}

export default GrandChildComponent