import { IoIosHelpCircle} from 'react-icons/io';
import { AiFillGift} from 'react-icons/ai';
import { FaMapMarkerAlt} from 'react-icons/fa';


import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
    <div className='sale'>
        Eco-Store's Pink Friday Sale is on!!!

        <div className='A'><AiFillGift/>Store & Events |</div>
        <div className='B'><FaMapMarkerAlt/>Gift Card |</div>
        <div className='C'><IoIosHelpCircle/>Help </div></div>
  )
}

export default Footer