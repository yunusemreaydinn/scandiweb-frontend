import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'
import List from '../Components/List/List'
import { useState } from 'react'
import axios from 'axios'

const Home = () => {

    const [selectedCards, setSelectedCards] = useState([]);

    const handleCheckboxChange = (e, sku) => {
        if(e.target.checked){
            setSelectedCards([...selectedCards, sku]);
        } else {
            setSelectedCards(selectedCards.filter(cardSku => cardSku !== sku));
        }
    }

    const massDelete = async (e) => {
        e.preventDefault();
        try {
            await axios.post("https://juniortest-yunusemreaydin.000webhostapp.com/App/Api/delete_products.php", {skus: selectedCards})
            .then(window.location.reload())
        } catch (error) {
            console.log('Error:', error);
        }
    }

    return (
        <>
            <Header massDelete={massDelete} title={"Product List"}/>
            <List handleCheckboxChange = {handleCheckboxChange} />
            <Footer />
        </>
    )
}

export default Home