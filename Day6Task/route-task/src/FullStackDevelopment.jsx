import React from 'react'
import Card from './Card'
import Images5 from './Images/5.png'
import Images6 from './Images/6.png'
import Images7 from './Images/7.png'

function FullStackDevelopment() {
  return (
    <div className='container'>
    <div className='row'>
    <Card 
    img = {Images5}
    title =" The Top 10 Tools Every Full Stack Developer Should Master in 2023"
    description ="‍As a full stack developer, having the right set of tools is crucial for your" 
    />
     <Card 
    img = {Images6}
    title ="The Ultimate Guide to Real-World Full Stack Development Applications"
    description ="Full stack development has become increasingly popular in recent years, with companies seeking professionals who" 
    />
     <Card 
    img ={Images7}
    title ="Top Skills To Become a Full Stack Developer in 2023"
    description ="Are you interested in becoming a great full-stack developer? If so, then you’re at the" 
    />
    </div>
    </div>
  )
}

export default FullStackDevelopment