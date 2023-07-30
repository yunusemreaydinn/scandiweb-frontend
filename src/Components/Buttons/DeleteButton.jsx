import React from 'react'

const DeleteButton = ({ massDelete }) => {

  return (
    <button onClick={massDelete} id='delete-product-btn' type='submit'>MASS DELETE</button>
  )
}

export default DeleteButton