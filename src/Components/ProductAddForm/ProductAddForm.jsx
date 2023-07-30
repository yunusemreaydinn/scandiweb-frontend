import React, { useState } from 'react';
import './ProductAddForm.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Header from '../Header/Header';

const ProductAddForm = () => {

    const [inputs, setInputs] = useState([]);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setInputs(values => ({ ...values, [name]: value }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost/scandiweb-backend/App/Api/add_product.php", inputs)
                .then(navigate("/")); //BURAYI DEĞİŞTİR
        } catch (error) {
            console.error("Error: ", error);
        }
    }

    const additionalFields = () => {
        if (inputs.productType === 'book') {
            return (
                <>
                    <tr>
                        <td><label htmlFor="weight">Weight (KG) </label></td>
                        <td><input
                            type="number"
                            id="weight"
                            name="weight"
                            onChange={handleChange}
                            required /></td>
                    </tr>
                    <tr><td colSpan={2}><strong className='fields'>Please provide the weight of the book.</strong></td></tr>
                </>
            );
        } else if (inputs.productType === 'dvd') {
            return (
                <>
                    <tr>
                        <td><label htmlFor="size">Size (MB) </label></td>
                        <td><input
                            type="number"
                            id="size"
                            name="size"
                            onChange={handleChange}
                            required /></td>
                    </tr>
                    <tr><td colSpan={2}><strong className='fields'>Please provide the size(MB) of the DVD.</strong></td></tr>
                </>
            );
        } else if (inputs.productType === 'furniture') {
            return (
                <>
                    <tr>
                        <td><label htmlFor="weight">Height (CM) </label></td>
                        <td><input
                            type="number"
                            id="height"
                            name="height"
                            onChange={handleChange}
                            required /></td>
                    </tr>
                    <tr>
                        <td><label htmlFor="weight">Width (CM) </label></td>
                        <td><input
                            type="number"
                            id="width"
                            name="width"
                            onChange={handleChange}
                            required /></td>
                    </tr>
                    <tr>
                        <td><label htmlFor="weight">Length (CM) </label></td>
                        <td><input
                            type="number"
                            id="length"
                            name="length"
                            onChange={handleChange}
                            required /></td>
                    </tr>
                    <tr><td colSpan={2}><strong className='fields'>Please provide the dimensions(CM) of the furniture.</strong></td></tr>
                </>
            );
        } else { return null; }
    }

    return (
        <>
            <div className='form'>
                <form id="product_form" method='post' onSubmit={handleSubmit}>
                    <Header title={"Product Add"} />
                    <div className='wrapper'>
                        <table cellSpacing={10} className='product-add-form'>
                            <tbody>
                                <tr>
                                    <td><label htmlFor="sku">SKU </label></td>
                                    <td><input
                                        type="text"
                                        name="sku"
                                        id="sku"
                                        onChange={handleChange}
                                        required /></td>
                                </tr>
                                <tr>
                                    <td><label htmlFor="name">Name </label></td>
                                    <td><input
                                        type="text"
                                        name="name"
                                        id="name"
                                        onChange={handleChange}
                                        required /></td>
                                </tr>
                                <tr>
                                    <td><label htmlFor="price">Price ($) </label></td>
                                    <td><input
                                        type="number"
                                        name="price"
                                        id="price"
                                        onChange={handleChange}
                                        required /></td>
                                </tr>
                                <tr>
                                    <td><label htmlFor="productType">Type Switcher </label></td>
                                    <td><select
                                        id="productType"
                                        name="productType"
                                        value={inputs.productType ? inputs.productType : "Type Switcher"}
                                        onChange={handleChange}>
                                        <option disabled>Type Switcher</option>
                                        <option value="book">Book</option>
                                        <option value="dvd">DVD</option>
                                        <option value="furniture">Furniture</option>
                                    </select></td>
                                </tr>

                                {additionalFields()}

                            </tbody>
                        </table>
                    </div>
                </form>
            </div>
        </>
    )
}

export default ProductAddForm