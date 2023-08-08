import React, { useState } from 'react'

function Home() {
    const [myListData, setMyListData]= useState(
        [
            {id:1, name:"Apple"},
            {id:2, name:"Orange"},
            {id:3, name:"Banana"},
            {id:4, name:"mango"},
            {id:5, name:"grapes"}
        ]);
    const handleRemove = (itemId) => {
        const updatedMyListData = myListData.filter((item)=> item.id != itemId);
        console.log(updatedMyListData);
        setMyListData(updatedMyListData)
    }
  return (
    <div>
        <ol>
            {myListData.map((item)=>(
             <li key={item.id}>
                 {item.name}  <button onClick={() => handleRemove(item.id)}>Remove</button>  
           
           </li>) )}
        </ol>
    </div>
  )
}

export default Home