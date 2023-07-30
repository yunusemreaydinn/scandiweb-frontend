import React from 'react'
import './Header.css'
import AddButton from '../Buttons/AddButton'
import DeleteButton from '../Buttons/DeleteButton'
import SaveButton from '../Buttons/SaveButton'
import CancelButton from '../Buttons/CancelButton'

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
