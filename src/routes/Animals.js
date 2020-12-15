import React, {useState, useEffect, Component} from 'react';
import { Link, withRouter } from 'react-router-dom';
import styles from './Animals.module.css'

export default function Animals(props) {

    useEffect(() => {
        fetchFilteredItems();
    }, []);

    const [filteredItems, setItems] = useState([]);

    const fetchFilteredItems = async () => {
        const data = await fetch(
            'http://localhost:4000/fetchFilteredItems', {
                method: 'POST',
                body: JSON.stringify({
                    animalURL: props.match.params.animalURL
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8'
                }
            })
        const filteredItems = await data.json();
        setItems(filteredItems.item);
    };

    return (
        <div>
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
                                <div className={ styles.danger }>danger: { item.danger }</div>
                                <div onClick={window.location = `localhost:3000/animals/${item.animalURL}`}>
                                <Link className={ styles.link } to={`/animals/${item.animalURL}`} >
                                    Buy
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
