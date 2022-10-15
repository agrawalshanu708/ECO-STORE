import Banner1  from "../../Assets/images/Banner1.jpg"
import "./Home.css"

import React from 'react'

export const Home = () => {
  return (
    <div>
    <div className="blank-div">  </div>
        <img className="Banner1" src={Banner1} alt=""/>
    </div>
  )
}

export default Home