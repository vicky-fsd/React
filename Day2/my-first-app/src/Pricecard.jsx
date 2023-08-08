import React from 'react'
import './Pricecard.css'
import Icon from './Icon.jsx'
import Icon1 from './Icon1'

function Pricecard() {
  return (
    <>
    
    {React.createElement("h1",{className:"para1"},"Pricing")}
    <div className='container'>
        <div className='card'>
            {React.createElement("h2",{className:"para1"},"Free")}
            {React.createElement("h1",{className:"heading"},"$0",React.createElement("span",{className:"span1"},"/Month"))}
            {React.createElement("hr",null,)}
            {React.createElement("ul",{className:"order"},
            React.createElement("li",{className:"listItem"},<span><Icon/></span>," Single User"),
            React.createElement("li",{className:"listItem"},<span><Icon/></span>," 5 GB Storage"),
            React.createElement("li",{className:"listItem"},<span><Icon/></span>," Unlimted Public Projects"),
            React.createElement("li",{className:"listItem"},<span><Icon/></span>," Community Access"),
            React.createElement("li",{className:"listItem1"},<span><Icon1/></span>," Unlimited Private Projects"),
            React.createElement("li",{className:"listItem1"},<span><Icon1/></span>," Deticated Phone Support"),
            React.createElement("li",{className:"listItem1"},<span><Icon1/></span>," Unlimted Free Subdomain"),
            React.createElement("li",{className:"listItem1"},<span><Icon1/></span>," Monthly Status Report"))}
            {React.createElement("button",{className:"btn1"},"Sign Up")}
        </div>
        <div className='card'>
            {React.createElement("h2",{className:"para1"},"Plus")}
            {React.createElement("h1",{className:"heading"},"$29",React.createElement("span",{className:"span1"},"/Month"))}
            {React.createElement("hr",null,)}
            {React.createElement("ul",{className:"order"},
            React.createElement("li",{className:"listItem"},<span><Icon/></span>," 5 Users"),
            React.createElement("li",{className:"listItem"},<span><Icon/></span>," 50 GB Storage"),
            React.createElement("li",{className:"listItem"},<span><Icon/></span>," Unlimted Public Projects"),
            React.createElement("li",{className:"listItem"},<span><Icon/></span>," Community Access"),
            React.createElement("li",{className:"listItem"},<span><Icon/></span>," Unlimited Private Projects"),
            React.createElement("li",{className:"listItem"},<span><Icon/></span>," Deticated Phone Support"),
            React.createElement("li",{className:"listItem1"},<span><Icon1/></span>," Unlimted Free Subdomain"),
            React.createElement("li",{className:"listItem1"},<span><Icon1/></span>," Monthly Status Report"))}
            {React.createElement("button",{className:"btn1"},"Subscribe")}
        </div>
        <div className='card'>
            {React.createElement("h2",{className:"para1"},"Pro")}
            {React.createElement("h1",{className:"heading"},"$49",React.createElement("span",{className:"span1"},"/Month"))}
            {React.createElement("hr",null,)}
            {React.createElement("ul",{className:"order"},
            React.createElement("li",{className:"listItem"},<span><Icon/></span>," Unlimted Users"),
            React.createElement("li",{className:"listItem"},<span><Icon/></span>," 150 GB Storage"),
            React.createElement("li",{className:"listItem"},<span><Icon/></span>," Unlimted Public Projects"),
            React.createElement("li",{className:"listItem"},<span><Icon/></span>," Community Access"),
            React.createElement("li",{className:"listItem"},<span><Icon/></span>," Unlimited Private Projects"),
            React.createElement("li",{className:"listItem"},<span><Icon/></span>," Deticated Phone Support"),
            React.createElement("li",{className:"listItem"},<span><Icon/></span>," Unlimted Free Subdomain"),
            React.createElement("li",{className:"listItem"},<span><Icon/></span>," Monthly Status Report"))}
            {React.createElement("button",{className:"btn1"},"Subscribe")}
        </div>
    </div>
    </>
  )
}

export default Pricecard