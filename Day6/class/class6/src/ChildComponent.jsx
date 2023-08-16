import React from 'react'
import GrandChildComponent from './GrandChildComponent'

function ChildComponent(props) {
    const sendDataToParent = () => {
        const data = 'Hello All Good morning!!!';
        props.onDataFromChild(data);
    }
  return (
    <>
    <h2>Child Component</h2>
    
   <button onClick={sendDataToParent}>Send Data To Parent</button>
       <GrandChildComponent names= {props.names}></GrandChildComponent>
    
    </>
  )
}

export default ChildComponent