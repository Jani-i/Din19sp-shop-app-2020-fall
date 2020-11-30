import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Axios from 'axios';

export default function AddItems(props) {

    const [state, setState] = useState({
        name : "",
        productURL : "",
        description : "",
        tags : "",
        price : "",
        imgURL : "",

    })
    const handleChange = (e) => {
        const {id, value} = e.target
        setState(prevState => ({
            ...prevState,
            [id] : value
        }))
    }

    const handleSubmitClick = (e) => {
        e.preventDefault();
            sendDetailsToServer()
        }
    
    
    const generateURL = (e) => {
        document.getElementById("productURL").value = document.getElementById("name").value.replace(/\s+/g, '-').toLowerCase();
        const {id, value} = e.target
        setState(prevState => ({
            ...prevState,
            productURL : document.getElementById("productURL").value
        }))
    }

    const sendDetailsToServer = () => {
            props.showError(null);
            props.showSuccess(null);
            const payload={
                "name":state.name,
                "productURL":state.productURL,
                "price":state.price,
                "imgURL":state.imgURL,
                "timesbought":state.timesbought,
                "description":state.description,
                "tags":state.tags,
            }
            Axios.post('http://localhost:4000/addNewItem', payload)
                .then(function (response) {
                    if(response.data === "OK"){
                            setState(prevState => ({
                                ...prevState,
                                'successMessage' : 'Item successfully added to DB'
                            }))
                            props.showError(null)
                            props.showSuccess("Item registered successfully!")
                    } else if(response.data === "Product name taken"){
                        props.showError("Product name already in use")
                        props.showSuccess(null)
                    } else {
                        console.log(response.data)
                        props.showError("Some error ocurred");
                        props.showSuccess(null);
                    }
                })
                .catch(function (error) {
                    console.log(error);
                    props.showSuccess(null);
                }); 
            } 
    
    return (
        <div>
            
            <h1>ADD ITEMS</h1>
                <div>
                    <label>Product name:</label><br/>
                    <input type="text"
                    id="name"
                    placeholder="Product name"
                    onChange={handleChange}/>
                </div>
                <div>
                    <label>Product URL</label><br/>
                    <input type="text"
                    id="productURL"
                    onChange={handleChange}/>
                    <button type="button" onClick={generateURL}>Generate URL</button>
                </div>
                <div>
                    <label>Price:</label><br/>
                    <input type="number"
                    id="price"
                    placeholder="Price"
                    onChange={handleChange}/>
                </div>
                <div>
                    <label>Description:</label><br/>
                    <textarea id="description"
                    placeholder="Type description here"
                    rows="8" cols="50" maxLength="2000"
                    onChange={handleChange}/>
                </div>
                <div>
                    <label>Tags:</label><br/>
                    <textarea id="tags"
                    placeholder="Type tags here"
                    rows="1" cols="50" maxLength="240"
                    onChange={handleChange}/>
                </div>
                <div>
                    <label>Image:</label><br/>
                    <input type="text"
                    id="imgURL"
                    placeholder="Image URL"
                    onChange={handleChange}/>
                </div>
                <div>
                    <label>Times bought (ALWAYS SET TO 0):</label><br/>
                    <input type="number"
                    id="timesbought"
                    placeholder="Times bought"
                    onChange={handleChange}/>
                </div>
                <button 
                type="submit" 
                onClick={handleSubmitClick}>
                    ADD
                </button>
            
        </div>
    )

}
