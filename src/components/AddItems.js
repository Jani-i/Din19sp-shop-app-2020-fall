import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Axios from 'axios';
import styles from './AddItems.module.css'

export default function AddItems(props) {

    const [state, setState] = useState({
        name : "",
        animalURL : "",
        description : "",
        tags : "",
        danger : "",
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
        document.getElementById("animalURL").value = document.getElementById("name").value.replace(/\s+/g, '-').toLowerCase();
        const {id, value} = e.target
        setState(prevState => ({
            ...prevState,
            animalURL : document.getElementById("animalURL").value
        }))
    }

    const sendDetailsToServer = () => {
            props.showError(null);
            props.showSuccess(null);
            const payload={
                "name":state.name,
                "animalURL":state.animalURL,
                "danger":state.danger,
                "imgURL":state.imgURL,
                "timesviewed":state.timesviewed,
                "description":state.description,
                "tags":state.tags,
            }
            Axios.post('https://krhumaja-api.herokuapp.com/addNewItem', payload)
                .then(function (response) {
                    if(response.data === "OK"){
                            setState(prevState => ({
                                ...prevState,
                                'successMessage' : 'Item successfully added to DB'
                            }))
                            props.showError(null)
                            props.showSuccess("Item registered successfully!")
                    } else if(response.data === "Animal name taken"){
                        props.showError("Animal name already in use")
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
                    <label className={ styles.formLabel }>Animal name:</label><br/>
                    <input type="text"
                    className={ styles.inputBox }
                    id="name"
                    placeholder="Animal name"
                    onChange={handleChange}/>
                </div>
                <div className={ styles.formItem }>
                    <label className={ styles.formLabel }>Animal URL</label><br/>
                    <input type="text"
                    className={ styles.inputBox }
                    id="animalURL"
                    onChange={handleChange}/>
                    <button type="button" onClick={generateURL}>Generate URL</button>
                </div>
                <div className={ styles.formItem }>
                    <label className={ styles.formLabel }>danger:</label><br/>
                    <input type="number"
                    className={ styles.inputBox }
                    id="danger"
                    placeholder="danger"
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
                    <label className={ styles.formLabel }>Times viewed (ALWAYS SET TO 0):</label><br/>
                    <input type="number"
                    className={ styles.inputBox }
                    id="timesviewed"
                    placeholder="Times viewed"
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
