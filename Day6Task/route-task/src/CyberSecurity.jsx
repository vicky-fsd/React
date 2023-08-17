import React from 'react'
import Card from './Card'

function CyberSecurity() {
  return (
    <div className='container'>
    <div className='row'>
    <Card 
    img = "https://www.guvi.in/blog/wp-content/uploads/2022/12/Yellow-Blue-Illustration-Business-Blog-Banner-1536x864.png"
    title ="Cybersecurity Vs Ethical Hacking: Top 10 Differences"
    description ="Cybersecurity & Ethical hacking and have been key in making sure that your data online" 
    />
     <Card 
    img = "https://www.guvi.in/blog/wp-content/uploads/2022/12/cybersecuity-.gif"
    title ="What is Cybersecurity? Importance and its uses & the growing challenges in 2023!"
    description ="Look around today, you will witness that we are more reliant on technology and devices" 
    />
     <Card 
    img = "https://www.guvi.in/blog/wp-content/uploads/2022/06/8bfd01c18be1b5059bc0d7770d9dabf1.gif"
    title ="Top 7 Cyber Security Attacks in Real Life"
    description =" Cyber security attacks are the type of actions that are designed to destroy, steal, modify," 
    />
    </div>
    </div>
  )
}

export default CyberSecurity