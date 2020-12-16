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
            'https://krhumaja-api.herokuapp.com:5432/fetchFeatured'
        );

        const featuredItems = await data.json();
        setItems(featuredItems.items);
        
    };

    return (
            <div className={ styles.supercontainer }><h1 className={ styles.featuredTitle }>Popular Animals</h1>
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
                                    <div className={ styles.danger }>DP: { item.danger }</div>
                                    <div className={ styles.link } onClick={window.location = `localhost:3000/animals/${item.animalURL}`}>
                                    <Link className={ styles.nolinkdeco } to={`/animals/${item.animalURL}`} >
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
