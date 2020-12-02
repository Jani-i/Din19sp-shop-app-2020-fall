import React, {useState, useEffect, Component} from 'react';
import styles from './Searchview.module.css'
import { Link } from 'react-router-dom';



export default function Searchview(props) {

    useEffect(() => {
        fetchFeaturedItems();
    }, []);

    const [featuredItems, setItems] = useState([]);

    const fetchFeaturedItems = async () => {
        const data = await fetch(
            'http://localhost:4000/fetchFeatured'
        );

        const featuredItems = await data.json();
        setItems(featuredItems.items);
        
    };

    const [search, setSearch] = useState('')

    const filteredItems = featuredItems.filter( item => {
        return(item.name.toLowerCase().includes(search.toLowerCase),
        item.imgURL.includes(search),
        item.price,
        item.productURL.includes(search)) 
    })
    console.log(featuredItems)
    console.log(filteredItems)
    return (
        <div>
            <div>
                <input type="text" placeholder="search" onChange={ e => setSearch(e.target.value)}></input>
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
