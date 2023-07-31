import { useNavigate } from "react-router-dom"

const AddButton = () => {
  const navigate = useNavigate();

  const redirect = () => { navigate("/add-product") }

  return (
    <button type="submit" onClick={redirect}>ADD</button>
  )
}

export default AddButton