import Banner1 from "../../Assets/images/Banner1.jpg"
import laptop1 from "../../Assets/images/laptop1.jpg"
import laptop2 from "../../Assets/images/laptop2.jpg"
import laptop3 from "../../Assets/images/laptop3.jpg"
import laptop4 from "../../Assets/images/laptop4.jpg"
import laptop5 from "../../Assets/images/laptop5.jpg"
import laptop6 from "../../Assets/images/laptop6.png"
import laptop7 from "../../Assets/images/laptop7.png"
import laptop8 from "../../Assets/images/laptop8.png"
import laptop9 from "../../Assets/images/laptop9.png"
import laptop10 from "../../Assets/images/laptop10.png"

import "./Home.css"

import React from 'react'

export const Home = () => {
  return (
    <div>

    
    
 
    <div className="brands3">
    <h6 className="Lapbrand">DELL</h6>
    <h6 className="Lapbrand">HP</h6>
    <h6 className="Lapbrand">MSI</h6>
    <h6 className="Lapbrand">ASUS</h6>
    <h6 className="Lapbrand">APPLE</h6> 
    </div>
    
    
     

    <div className="image-div">    <img className="Banner1" src={Banner1} alt=""/>
</div>

<marquee className="marquee" width="100%" direction="left" height="15px"  >
India's Largest Laptop Store 🚀 Friday Sale is on!!! You can easily buy laptops online, with the convenience of sitting at your home. Various brands like Dell, Lenovo, Asus, HP, and Acer offer various models with varied features.
</marquee>

 <div className="laptopimages">
  <div> <img className="laptop1" src={laptop1} alt="" /></div> 
  <div> <img className="laptop1" src={laptop2} alt="" /></div>
  <div> <img className="laptop1" src={laptop3} alt="" /></div>
  <div> <img className="laptop1" src={laptop4} alt="" /></div>
  <div> <img className="laptop1" src={laptop5} alt="" /></div>
</div>

  <div className="categories">
  <h2>📍Laptop Categories!!!  </h2></div>
     
<div className="">
  <div> <img className="laptop2" src={laptop6} alt="" /></div>
  <div> <img className="laptop2" src={laptop7} alt="" /></div>
  <div> <img className="laptop3" src={laptop8} alt=""/></div>
  <div> <img className="laptop3" src={laptop9} alt=""/></div> 
  <div> <img className="laptop4" src={laptop10} alt=""/></div>
</div>

<div>
  <div></div>
  <div></div>
</div>

    </div>
  )
}

export default Home