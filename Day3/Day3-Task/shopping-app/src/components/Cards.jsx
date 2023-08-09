import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


import { useState } from 'react'

function BasicExample(props) {
  const [count, setCount] = useState(0);
 
  

  return (
    <>
    
    <Card style={{ width: '14rem' }}>
      <Card.Img variant="top" src={props.img} />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>
            {props.description}
        </Card.Text>
        <Card.Text>
           Ratings : {props.rating}
        </Card.Text>
        <Card.Title>US{props.price}</Card.Title>
      </Card.Body>
      <Button  onClick={() => setCount((count) => count + 1)}>Add to Cart{count}</Button><br></br>
      <Button  onClick={() => setCount((count) => count >0 && count - 1)}>Remove from Cart</Button>
      
      
      
    </Card>
    </>
  );
}

export default BasicExample;