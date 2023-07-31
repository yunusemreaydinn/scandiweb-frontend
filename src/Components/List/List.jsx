import React, { useEffect, useState } from 'react'
import Card from '../Card/Card'
import './List.css'
import axios from 'axios'


const List = ({ handleCheckboxChange }) => {

  const [products, setProducts] = useState([])

  const getProducts = async (e) => {
    try {
      await axios.get("/scandiweb-backend/App/Api/get_products.php")
        .then(res => setProducts(res.data))
    } catch (error) {
      console.log('Error:', error);
    }
  }

  useEffect(() => {
    getProducts();
  }, [])

  console.log(products)

  return (
    <div className='list'>
      {/* {
        products.map((product) => (
          <Card key={product.sku} data={product} handleCheckboxChange={handleCheckboxChange} />
        ))
      } */}
    </div>
  )
}

export default List