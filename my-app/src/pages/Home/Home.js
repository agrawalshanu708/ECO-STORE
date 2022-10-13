import React from 'react'
import { BsPersonFill } from 'react-icons/bs';
import { ImCart } from "react-icons/im";
import { IoMdHeart } from "react-icons/io";
import { MdStoreMallDirectory } from "react-icons/md";
import "../Home/Home.css"


const Navbar = () => {
  return (
<div>
<div className='navigation'>
<h6 className="brand">Eco-Store <MdStoreMallDirectory/> </h6>
<div className='input'>
<input placeholder='search on Eco-Store'/>🔍
</div>
<button className='btn'>log out</button>

<div className='icons'>
<div className='icons1'><BsPersonFill/></div>
<div className='icons1'><ImCart/></div>
<div className='icons1'><IoMdHeart/></div>
</div>

</div>
</div>
  )
}

export default Navbar