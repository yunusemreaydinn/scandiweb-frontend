import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'
import List from '../Components/List/List'
import { useState } from 'react'
import { toast } from 'react-toastify';


const Home = () => {

  const [selectedCards, setSelectedCards] = useState([]);

  const handleCheckboxChange = (e, sku) => {
    if (e.target.checked) {
      setSelectedCards([...selectedCards, sku]);
    } else {
      setSelectedCards(selectedCards.filter(cardSku => cardSku !== sku));
    }
  }

  const massDelete = async (e) => {
    e.preventDefault();
    if (selectedCards.length === 0) {
      toast.warn('Please select at least one product.', {
        position: "bottom-right",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
      return;
    }
    try {
      const response = await fetch("http://localhost/scandiweb-backend/App/Api/delete_products.php", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ skus: selectedCards })
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      window.location.reload();
    } catch (error) {
      console.log('Error:', error);
    }
  }

  return (
    <>
      <Header massDelete={massDelete} title={"Product List"} />
      <List handleCheckboxChange={handleCheckboxChange} />
      <Footer />
    </>
  )
}

export default Home