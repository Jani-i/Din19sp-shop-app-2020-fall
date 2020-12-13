import React, {useState, useEffect, Component} from 'react';
import styles from './Searchview.module.css'
import { Link } from 'react-router-dom';



export default function Searchview(props) {

    useEffect(() => {
        fetchAllItems();
    }, []);

    const [allItems, setItems] = useState([]);

    const fetchAllItems = async () => {
        const data = await fetch(
            'http://localhost:4000/fetchItems'
        );

        const allItems = await data.json();
        setItems(allItems.items);
        
    };

    const [search, setSearch] = useState('')

    const filteredItems = allItems.filter( item => {
        return(item.name.toLowerCase().includes(search.toLowerCase),
        item.imgURL.includes(search),
        item.price,
        item.productURL.includes(search)) 
    })
    console.log(allItems)
    console.log(filteredItems)
    return (
        <div>
            <div>
                <input type="text" className={styles.searchbar} placeholder="search" onChange={ e => setSearch(e.target.value)}></input>
            </div>
            <div>
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
                                <div className={ styles.price }>Price: { item.price }€</div>
                                <Link className={ styles.link } to={`/products/${item.productURL}`}>
                                    Buy
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                </>
                ))}
            </div>
        </div>
        /*<div className={ styles.container }>
                {featuredItems.map(item => (
                <>
                <div className={ styles.itemContainer } >
                    <div >
                        <div className={ styles.itemName } key={item.name}>{item.name}</div>
                        <div >
                            <div className={ styles.imgContainer} >
                                <img src={item.imgURL} alt="Error: no image found"></img>
                            </div>
                            <div className={ styles.bottomInfo }>                        
                                <div className={ styles.price }>Price: { item.price }€</div>
                                <Link className={ styles.link } to={`/products/${item.productURL}`}>
                                    Buy
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                </>
            ))}
        </div>*/
    )
}
