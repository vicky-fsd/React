import React from 'react'
import Card from './Card'
import Images1 from './Images/2-1.png'
import Images2 from './Images/3.png'
import Images3 from './Images/4.png'


function Career(props) {
  return (
    <div className='container'>
    <div className='row'>
    <Card img = {Images1} title="Top Skills Required to Become a Digital Marketer" description="Digital marketing is one of the most dynamic industries that has transformed how businesses connect"/>
    <Card 
    img = {Images2}
    title ="Career Opportunities in Digital Marketing | Digital Marketing Career"
    description ='As we move forward in today’s digital age, the need for businesses to engage with'
    />
    <Card 
    img = {Images3}
    title ="10 Best Data Science Online Courses for Beginners | 2023"
    description ='In today’s rapidly evolving digital landscape, Data Science has emerged as one of the most'
    />
    </div>
    </div>
  )
}

export default Career