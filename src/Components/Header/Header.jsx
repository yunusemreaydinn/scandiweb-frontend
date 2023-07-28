import React from 'react'
import './Header.css'

const Header = () => {

  return (
    <header>
      <h1> Product List </h1>
      <div>
        <a href='/add-product'><button>ADD</button></a>
        <button id='delete-product-btn'>MASS DELETE</button>
      </div>
    </header>
  )
}

export default Header
