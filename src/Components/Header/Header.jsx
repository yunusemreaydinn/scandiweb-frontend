import React from 'react'
import './Header.css'
import { AddButton, DeleteButton, SaveButton, CancelButton  } from '../Buttons/index'

const Header = ({ massDelete, title }) => {

  return (
    <header>
      <h1 className='title'> {title} </h1>
      <div>
        { (title === "Product List") && (<div><AddButton /> <DeleteButton massDelete={massDelete} /> </div>) } 
        { (title === "Product Add") && (<div> <SaveButton/> <CancelButton/> </div>) }
      </div>
    </header>
  )
}

export default Header
