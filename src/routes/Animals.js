import React, {useState, useEffect, Component} from 'react';
import { Link,} from 'react-router-dom';
import styles from './Animals.module.css'

export default function Animals(props) {

    useEffect(() => {
        fetchFilteredItems();
    }, []);

    const [filteredItems, setItems] = useState([]);

    const fetchFilteredItems = async () => {
        const data = await fetch(
            'http://localhost:4000/fetchItems'
        )

        const filteredItems = await data.json();
        setItems(filteredItems.items);
        console.log(filteredItems)
    };

    return (
        <div>
            <div>
                {filteredItems.map(item => (
                <>
                <div className={ styles.container } >
                    <div >
                        <div >
                            <Link className={ styles.link } to={`/animals/${item.animalURL}`} >
                                {item.name}
                            </Link>
                        </div>
                    </div>
                </div>
                </>
                ))}
            </div>
        </div>
    )
}