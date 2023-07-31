import React from 'react'
import { useNavigate } from 'react-router-dom';

const CancelButton = () => {
  const navigate = useNavigate();

  const redirect = () => { navigate("/") }

  return (<button onClick={redirect}>Cancel</button>)
}

export default CancelButton