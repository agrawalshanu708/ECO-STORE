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
      <div>  <li> {user.tittle} </li>
      </div>
      )
    } </div>
    </div>
   
  )
}

export default ProductStore