import React, { useEffect , useState} from 'react'
import axios from "axios";
import "./ProductStore.css"


const ProductStore = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {

    
      (async () => {
        const response = await axios.get("/api/products")
        setUsers(response.data.products)
      })()
  },[])



  return (
    <div className="main-divs">
    <div> {users.map((user) => 
      <div className='r'><div> <img className='img' src={user.image}/></div>
    <div className='list'>  <li> {user.tittle} </li>
            <li className='dis'> {user.description} </li> 
            <li> {user.processor }</li>
            <li> {user.category}</li>
            <li> {user.price}</li>
            <li> {user.qty}</li>
            <li>{user.original_price}</li>
            <li>{user.discount}</li> </div>
      </div>
      )
    } </div>
    </div>
   
  )
}

export default ProductStore