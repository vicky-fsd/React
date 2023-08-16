import React, { useState } from 'react'
import ChildComponent from './ChildComponent'

function ParentComponent() {
    const [receivedData, setReceivedData] = useState("");
    const handleDataFromChild = (data) => {
        setReceivedData(data);
    }
 const names = ["Vignesh","Gokul","Sugu","Santhosh","Vijay"];
 
    return (
        <>
    <h1>List of Names</h1>
    <p>Data From Child : {receivedData}</p>
    
    <ChildComponent onDataFromChild={handleDataFromChild}names={names}></ChildComponent>
    </>
  )
}

export default ParentComponent