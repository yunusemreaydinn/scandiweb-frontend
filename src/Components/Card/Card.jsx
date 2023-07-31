import React from 'react'
import './Card.css'

const Card = ({ data, handleCheckboxChange }) => {

  return (
    <div className='card'>
      <input type='checkbox' className='delete-checkbox'
        onChange={(e) => handleCheckboxChange(e, data.sku)}>
      </input>
      <div className='card-content'>
        <table>
          <tbody>
            <tr><td>{data.sku}</td></tr>
            <tr><td>{data.name}</td></tr>
            <tr><td>{parseInt(data.price).toFixed(2) + " $"}</td></tr>
            {(data.type === "book") && <tr><td>{"Weight: " + data.weight + " KG"}</td></tr>}
            {(data.type === "dvd") && <tr><td>{"Size: " + data.size + " MB"}</td></tr>}
            {(data.type === "furniture") && <tr><td>{"Dimensions: " + data.height + "x" + data.width + "x" + data.length}</td></tr>}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Card
