import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Axios from 'axios';
import styles from './AddItems.module.css'

export default function AddItems(props) {

    const [state, setState] = useState({
        id : "",
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

    const setNewInfo = () =>{
        state.id = document.getElementById("MID").value;
        state.name = document.getElementById("Mname").value;
        state.animalURL = document.getElementById("ManimalURL").value;
        state.description = document.getElementById("Mdescription").value;
        state.tags = document.getElementById("Mtags").value;
        state.danger = document.getElementById("Mdanger").value;
        state.imgURL = document.getElementById("MimgURL").value;
    }

    const handleModifyClick = (e) => {
        e.preventDefault();
            setNewInfo()
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

    const [itemInfo, setItems] = useState([]);

    const fetchItemInfo = async () => {
        const data = await fetch(
            'https://krhumaja-api.herokuapp.com/fetchItemModify', {
                method: 'POST',
                body: JSON.stringify({
                    name: document.getElementById("Mname").value
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8'
                }
            })
        const itemInfo = await data.json();
        setItems(itemInfo.item);
        console.log(itemInfo.item[0])
        document.getElementById("ManimalURL").value = itemInfo.item[0].animalURL;
        document.getElementById("Mdanger").value = itemInfo.item[0].danger;
        document.getElementById("Mdescription").value = itemInfo.item[0].description;
        document.getElementById("Mtags").value = itemInfo.item[0].tags;
        document.getElementById("MimgURL").value = itemInfo.item[0].imgURL;
        document.getElementById("Mtimesviewed").value = itemInfo.item[0].timesviewed;
        document.getElementById("MID").value = itemInfo.item[0].id;
        }

    const sendDetailsToServer = () => {
            props.showError(null);
            props.showSuccess(null);
            const payload={
                "id":state.id,
                "name":state.name,
                "animalURL":state.animalURL,
                "danger":state.danger,
                "imgURL":state.imgURL,
                "timesviewed":state.timesviewed,
                "description":state.description,
                "tags":state.tags,
            }
            console.log(payload)
            Axios.post('https://krhumaja-api.herokuapp.com/modifyItem', payload)
                .then(function (response) {
                    if(response.data === "OK"){
                            setState(prevState => ({
                                ...prevState,
                                'successMessage' : 'Item successfully modified'
                            }))
                            props.showError(null)
                            props.showSuccess("Item modified successfully!")
                    } else if(response.data === "Animal name doesn't exist"){
                        props.showError("Animal name doesn't exist")
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
            
            <h1>MODIFY ITEMS</h1>
                <div className={ styles.formItem }>
                    <label className={ styles.formLabel }>Animal name:</label><br/>
                    <input type="text"
                    className={ styles.inputBox }
                    id="Mname"
                    placeholder="Animal name"
                    onChange={handleChange}/>
                    <button type="button" onClick={fetchItemInfo }>Fetch Item from DB</button>
                    Animal ID = 
                    <textarea id="MID" cols="5" rows="1"/>
                </div>
                <div className={ styles.formItem }>
                    <label className={ styles.formLabel }>Animal URL</label><br/>
                    <input type="text"
                    className={ styles.inputBox }
                    id="ManimalURL"
                    onChange={handleChange}/>
                    <button type="button" onClick={generateURL}>Generate URL</button>
                </div>
                <div className={ styles.formItem }>
                    <label className={ styles.formLabel }>Danger Rating:</label><br/>
                    <input type="number"
                    className={ styles.inputBox }
                    id="Mdanger"
                    placeholder="Danger"
                    onChange={handleChange}/>
                </div>
                <div className={ styles.formItem }>
                    <label className={ styles.formLabel }>Description:</label><br/>
                    <textarea id="Mdescription"
                    placeholder="Type description here"
                    rows="8" cols="50" maxLength="2000"
                    onChange={handleChange}/>
                </div>
                <div className={ styles.formItem }>
                    <label className={ styles.formLabel }>Tags:</label><br/>
                    <textarea id="Mtags"
                    placeholder="Type tags here"
                    rows="1" cols="50" maxLength="240"
                    onChange={handleChange}/>
                </div>
                <div className={ styles.formItem }>
                    <label className={ styles.formLabel }>Image:</label><br/>
                    <input type="text"
                    className={ styles.inputBox }
                    id="MimgURL"
                    placeholder="Image URL"
                    onChange={handleChange}/>
                </div>
                <div className={ styles.formItem }>
                    <label className={ styles.formLabel }>Times viewed (ALWAYS SET TO 0):</label><br/>
                    <input type="number"
                    className={ styles.inputBox }
                    id="Mtimesviewed"
                    placeholder="Times viewed"
                    onChange={handleChange}/>
                </div>
                <button 
                type="submit" 
                onClick={handleModifyClick}>
                    MODIFY
                </button>
            
        </div>
    )

}
