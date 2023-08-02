import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import AddProduct from './Pages/AddProduct';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';


function App() {
  return (
    <>
    <ToastContainer/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/add-product' element={<AddProduct />} />
      </Routes>
    </>
  )
}

export default App
