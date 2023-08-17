import React from 'react'
import Card from './Card'

function FullStackDevelopment() {
  return (
    <div className='container'>
    <div className='row'>
    <Card 
    img = "https://www.guvi.in/blog/wp-content/uploads/2023/08/The-Top-10-Tools-Every-Full-Stack-Developer-Should-Master-in-2023-1536x804.png"
    title =" The Top 10 Tools Every Full Stack Developer Should Master in 2023"
    description ="‍As a full stack developer, having the right set of tools is crucial for your" 
    />
     <Card 
    img = "https://www.guvi.in/blog/wp-content/uploads/2023/08/The-Ultimate-Guide-to-Real-World-Full-Stack-Development-Applications-1536x804.png"
    title ="The Ultimate Guide to Real-World Full Stack Development Applications"
    description ="Full stack development has become increasingly popular in recent years, with companies seeking professionals who" 
    />
     <Card 
    img = "https://www.guvi.in/blog/wp-content/uploads/2023/07/image-6.png"
    title ="Top Skills To Become a Full Stack Developer in 2023"
    description ="Are you interested in becoming a great full-stack developer? If so, then you’re at the" 
    />
    </div>
    </div>
  )
}

export default FullStackDevelopment