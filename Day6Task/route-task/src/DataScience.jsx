import React from 'react'
import Card from './Card'

function DataScience() {
  return (
    <div className='container'>
    <div className='row'>
    <Card 
    img = "https://www.guvi.in/blog/wp-content/uploads/2023/08/How-Long-Would-It-Take-to-Learn-Data-Science-1536x804.png"
    title ="Data Science Webinars and Workshops"
    description ="In today’s world, it’s becoming increasingly important to be knowledgeable in the field of data" 
    />
     <Card 
    img = "https://www.guvi.in/blog/wp-content/uploads/2023/08/data-science-webinars-and-workshops-1536x804.webp"
    title ="How Long Would It Take to Learn Data Science?"
    description ="Have you ever wondered how much time it takes to learn data science? It’s an" 
    />
     <Card 
    img = "https://www.guvi.in/blog/wp-content/uploads/2023/07/best-data-science-frameworks-1536x804.webp"
    title ="10 Best Data Science Frameworks in 2023"
    description ="Does data scientists fascinate you? If yes, you must definitely know about data science frameworks." 
    />
    </div>
    </div>
  )
}

export default DataScience