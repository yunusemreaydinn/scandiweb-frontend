import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import AddProduct from './Pages/AddProduct'


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/add-product' element={<AddProduct />} />
      </Routes>
    </>
  )
}

export default App
