import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Axios from 'axios';
import styles from './AddItems.module.css'

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
                <div className={ styles.formItem }>
                    <label className={ styles.formLabel }>Product name:</label><br/>
                    <input type="text"
                    className={ styles.inputBox }
                    id="name"
                    pattern="[A-Za-z]"
                    placeholder="Product name"
                    onChange={handleChange}/>
                </div>
                <div className={ styles.formItem }>
                    <label className={ styles.formLabel }>Product URL</label><br/>
                    <input type="text"
                    className={ styles.inputBox }
                    id="productURL"
                    onChange={handleChange}/>
                    <button type="button" onClick={generateURL}>Generate URL</button>
                </div>
                <div className={ styles.formItem }>
                    <label className={ styles.formLabel }>Price:</label><br/>
                    <input type="number"
                    className={ styles.inputBox }
                    id="price"
                    placeholder="Price"
                    onChange={handleChange}/>
                </div>
                <div className={ styles.formItem }>
                    <label className={ styles.formLabel }>Description:</label><br/>
                    <textarea id="description"
                    placeholder="Type description here"
                    rows="8" cols="50" maxLength="2000"
                    onChange={handleChange}/>
                </div>
                <div className={ styles.formItem }>
                    <label className={ styles.formLabel }>Tags:</label><br/>
                    <textarea id="tags"
                    placeholder="Type tags here"
                    rows="1" cols="50" maxLength="240"
                    onChange={handleChange}/>
                </div>
                <div className={ styles.formItem }>
                    <label className={ styles.formLabel }>Image:</label><br/>
                    <input type="text"
                    className={ styles.inputBox }
                    id="imgURL"
                    placeholder="Image URL"
                    onChange={handleChange}/>
                </div>
                <div className={ styles.formItem }>
                    <label className={ styles.formLabel }>Times bought (ALWAYS SET TO 0):</label><br/>
                    <input type="number"
                    className={ styles.inputBox }
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
