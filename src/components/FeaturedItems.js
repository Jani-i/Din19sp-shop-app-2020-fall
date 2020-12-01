import React, {useState, useEffect, Component} from 'react';
import styles from './FeaturedItems.module.css';
import { Link } from 'react-router-dom';

export default function FeaturedItems() {

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

    return (
            <div className={ styles.supercontainer }><h1>Featured Items</h1>
            <div className={ styles.backgroundImage }>
            </div>
                <div className={ styles.container }>
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
                </div>
            </div>
    )
}
