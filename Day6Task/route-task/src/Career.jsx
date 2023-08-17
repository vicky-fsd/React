import React from 'react'
import Card from './Card'

function Career() {
  return (
    <div className='container'>
    <div className='row'>
    <Card img = "https://www.guvi.in/blog/wp-content/uploads/2023/08/feature-image-Skills-Required-to-Become-a-Digital-Marketer.webp" title="Top Skills Required to Become a Digital Marketer" description="Digital marketing is one of the most dynamic industries that has transformed how businesses connect"/>
    <Card 
    img = "https://www.guvi.in/blog/wp-content/uploads/2023/08/feature-image-Career-Opportunities-in-Digital-Marketing.webp "
    title ="Career Opportunities in Digital Marketing | Digital Marketing Career"
    description ='As we move forward in today’s digital age, the need for businesses to engage with'
    />
    <Card 
    img = "https://www.guvi.in/blog/wp-content/uploads/2023/08/feature-image-Best-Data-Science-Online-Courses-for-Beginners.webp"
    title ="10 Best Data Science Online Courses for Beginners | 2023"
    description ='In today’s rapidly evolving digital landscape, Data Science has emerged as one of the most'
    />
    </div>
    </div>
  )
}

export default Career