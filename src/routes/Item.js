import React, {useState, useEffect, Component} from 'react';
import styles from './Item.module.css'


export default function Item(props) {

    useEffect(() => {
        fetchItemInfo();
    }, []);

    const [itemInfo, setItems] = useState([]);

    const fetchItemInfo = async () => {
        const data = await fetch(
            'http://localhost:4000/fetchItemInfo', {
                method: 'POST',
                body: JSON.stringify({
                    productURL: props.match.params.productURL
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8'
                }
            })
        const itemInfo = await data.json();
        setItems(itemInfo.item);
        
    };
    return (
        <div className={ styles.container }>
            {itemInfo.map(item => (
            <>
            <div className={ styles.itemContainer } >
                <div >
                    <div className={ styles.itemName } key={item.name}>{item.name}</div>
                    <div >
                        <div className={ styles.imgContainer} >
                            <img src={item.imgURL} alt="Error: no image found"></img>
                        </div>
                        <div className={ styles.price }>Price: {item.price}€</div>
                    </div>
                </div>
            </div>
            </>
        ))}
        </div>
    )
}
