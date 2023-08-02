import React, { useEffect, useState } from 'react'
import Card from '../Card/Card'
import './List.css'

const List = ({ handleCheckboxChange }) => {

  const [products, setProducts] = useState([])

  const getProducts = async () => {
    try {
      const response = await fetch("http://localhost/scandiweb-backend/App/Api/get_products.php");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      } else {
        const data = await response.json();
        setProducts(data);
      }
    } catch (error) {
      console.log('Error:', error);
    }
  }


  useEffect(() => {
    getProducts();
  }, [])

  return (
    <div className='list'>
      {
        products.length > 0 ? products.map((product) => (
          <Card key={product.sku} data={product} handleCheckboxChange={handleCheckboxChange} /> 
        )) : <div className='empty-msg'>Product list is empty.</div>
      }
    </div>
  )
}

export default List