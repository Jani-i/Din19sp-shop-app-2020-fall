import React, {useState, useEffect, Component, createContext} from 'react';
import styles from './Searchview.module.css'
import { Link } from 'react-router-dom';



export default function Searchview(props) {

    useEffect(() => {
        fetchAllItems();
    }, []);

    const [allItems, setItems] = useState([]);

    const fetchAllItems = async () => {
        const data = await fetch(
            'https://krhumaja-api.herokuapp.com:5432/fetchItems'
        );

        const allItems = await data.json();
        setItems(allItems.items);
        
    };

    const [search, setSearch] = useState('')

    


    const filteredItems = allItems.filter( item => {
        if(search === ""){
            return(
                null
            )
        }
        else{
            return(item.name.toLowerCase().includes(search.toLowerCase),
            item.imgURL.includes(search),
            item.danger,
            item.animal,
            item.animalURL.includes(search))
        }
         
    })

    console.log(allItems)
    console.log(filteredItems)
    console.log(search)
    return (
        <div>
            <div className={styles.blue}>
                <input type="text" className={styles.searchbar} placeholder="search" onChange={ e => setSearch(e.target.value)}></input>
            </div>
            <div className={styles.supercontainer}>
                {filteredItems.map(item => (
                <>
                <div className={ styles.container } >
                    <div >
                        <div className={ styles.itemName } key={item.name}>{item.name}</div>
                        <div >
                            <div className={ styles.imgContainer} >
                                <img src={item.imgURL} alt="Error: no image found"></img>
                            </div>
                            <div className={ styles.bottomInfo }>                        
                                <div className={ styles.danger }>DP: { item.danger }</div>
                                <div onClick={window.location = `localhost:3000/animals/${item.animalURL}`}>
                                <Link className={ styles.link } to={`/animals/${item.animalURL}`} >
                                    View
                                </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </>
                ))}
            </div>
        </div>
       
    )
}
