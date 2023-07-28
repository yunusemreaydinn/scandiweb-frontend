import React, { useEffect, useState } from 'react'
import Card from '../Card/Card'
import './List.css'
import axios from 'axios'


const List = () => {

  const [products, setProducts] = useState([])

  const getusers = () => {
    axios.get("http://localhost/scandiweb-backend/App/Api/get_products.php")
      .then(function (res) {
        setProducts(res.data);
      })
  }

  useEffect(() => {
    getusers();
  }, [])

  return (
    <div className='list'>
      {
        products.map((product) => (
          <Card key={product.sku} data={product} />
        ))
      }
    </div>
  )
}

export default List