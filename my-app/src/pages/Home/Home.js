import Banner1  from "../../Assets/images/Banner1.jpg"
import laptop1 from "../../Assets/images/laptop1.jpg"
import laptop2 from "../../Assets/images/laptop2.jpg"
import laptop3 from "../../Assets/images/laptop3.jpg"
import laptop4 from "../../Assets/images/laptop4.jpg"
import laptop5 from "../../Assets/images/laptop5.jpg"

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

<marquee className="marquee" width="100%" direction="left" height="22px"  >
India's Largest Laptop Store 💻 Friday Sale is on!!!
</marquee>

 <div className="laptopimages">
  <div> <img className="laptop1" src={laptop1} alt="" /></div> 
  <div> <img className="laptop1" src={laptop2} alt="" /></div>
  <div> <img className="laptop1" src={laptop3} alt="" /></div>
  <div> <img className="laptop1" src={laptop4} alt="" /></div>
  <div> <img className="laptop1" src={laptop5} alt="" /></div>
</div>


    </div>
  )
}

export default Home