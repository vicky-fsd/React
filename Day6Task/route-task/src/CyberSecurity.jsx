import React from 'react'
import Card from './Card'
import Images8 from './Images/8.png'
import Images11 from './Images/11.png'
import Images12 from './Images/12.png'




function CyberSecurity() {
  return (
    <div className='container'>
    <div className='row'>
    <Card 
    img = {Images8}
    title ="Cybersecurity Vs Ethical Hacking: Top 10 Differences"
    description ="Cybersecurity & Ethical hacking and have been key in making sure that your data online" 
    />
     <Card 
    img = {Images11}
    title ="What is Cybersecurity? Importance and its uses & the growing challenges in 2023!"
    description ="Look around today, you will witness that we are more reliant on technology and devices" 
    />
     <Card 
    img = {Images12}
    title ="Top 7 Cyber Security Attacks in Real Life"
    description =" Cyber security attacks are the type of actions that are designed to destroy, steal, modify," 
    />
    </div>
    </div>
  )
}

export default CyberSecurity