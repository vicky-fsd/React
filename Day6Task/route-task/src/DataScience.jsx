import React from 'react'
import Card from './Card'
import Images9 from './Images/9.png'
import Images10 from './Images/10.png'
import Images13 from './Images/13.png'


function DataScience() {
  return (
    <div className='container'>
    <div className='row'>
    <Card 
    img = {Images9}
    title ="Data Science Webinars and Workshops"
    description ="In today’s world, it’s becoming increasingly important to be knowledgeable in the field of data" 
    />
     <Card 
    img = {Images10}
    title ="How Long Would It Take to Learn Data Science?"
    description ="Have you ever wondered how much time it takes to learn data science? It’s an" 
    />
     <Card 
    img = {Images13}
    title ="10 Best Data Science Frameworks in 2023"
    description ="Does data scientists fascinate you? If yes, you must definitely know about data science frameworks." 
    />
    </div>
    </div>
  )
}

export default DataScience