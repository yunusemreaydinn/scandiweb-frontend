import React from 'react'
import './Card.css'

const Card = ({ data }) => {
  return (
    <div className='card'>
      <input type='checkbox' className='delete-checkbox'></input>
      <div className='card-content'>
        <table>
          <tbody>
                <tr><td>{data.sku}</td></tr>
                <tr><td>{data.name}</td></tr>
                <tr><td>{data.price}</td></tr>
                <tr><td>{data.size}</td></tr>
              </tbody>
        </table>
      </div>
    </div>
  )
}



export default Card
