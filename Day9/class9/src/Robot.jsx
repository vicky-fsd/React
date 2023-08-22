import React,{ useState , useRef} from 'react'

function Robot() {
const [count,setCount] = useState(0);
const countRef = useRef(0)

const handleButtonClick = () => {
    setCount(count+1);
    countRef.current = countRef.current + 1;
    console.log(" Total Button Presses  " + countRef.current )

}

  return (
    <div>
        <button onClick={handleButtonClick}>Press Me!!</button>
        <p>Button Pressed {count} times</p>
    </div>
  )
}

export default Robot