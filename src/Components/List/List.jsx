import React, { useEffect, useState } from 'react'
import Card from '../Card/Card'
import './List.css'

const List = ({ handleCheckboxChange }) => {

  const [products, setProducts] = useState([])

  const getProducts = async () => {
    try {
<<<<<<< HEAD
      const response = await fetch("http://localhost/scandiweb-backend/App/Api/get_products.php");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      } else {
        const data = await response.json();
        setProducts(data);
      }
=======
      await axios.get("/scandiweb-backend/App/Api/get_products.php")
        .then(res => setProducts(res.data))
>>>>>>> 3e36e85fd82782fbb94c5c92b86beb81bc3f1dbb
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
<<<<<<< HEAD
      {
        products.length > 0 ? products.map((product) => (
          <Card key={product.sku} data={product} handleCheckboxChange={handleCheckboxChange} /> 
        )) : <div className='empty-msg'>Product list is empty.</div>
      }
=======
      {/* {
        products.map((product) => (
          <Card key={product.sku} data={product} handleCheckboxChange={handleCheckboxChange} />
        ))
      } */}
>>>>>>> 3e36e85fd82782fbb94c5c92b86beb81bc3f1dbb
    </div>
  )
}

export default List