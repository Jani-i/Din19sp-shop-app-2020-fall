import React, {useState, useEffect, Component} from 'react';
import FeaturedItems from '../components/FeaturedItems'
import styles from './Item.module.css';
import { Link, withRouter } from 'react-router-dom';


function Item(props) {

    useEffect(() => {
        fetchItemInfo();
    }, []);

    const [itemInfo, setItems] = useState([]);

    const fetchItemInfo = async () => {
        const data = await fetch(
            'https://krhumaja-api.herokuapp.com/fetchItemInfo', {
                method: 'POST',
                body: JSON.stringify({
                    animalURL: props.match.params.animalURL
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
            <div>

            <div className={ styles.backgroundImage }>
            </div>
            {itemInfo.map(item => (
            <>
            <div className={ styles.itemContainer } >
                <div >
                    <div className={ styles.itemName } key={item.name}>{item.name}</div>
                    <div className={ styles.infoContainer }>
                        <div className={ styles.imgContainer} >
                            <img className={ styles.img } src={item.imgURL} alt="Error: no image found"></img>
                        </div>
                        <div className={ styles.descriptionContainer }>
                        <div className={ styles.description }>{item.description}</div>
                        <div className={ styles.bottomInfo } >
                            <div className={ styles.danger }>DP: {item.danger}</div>
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

export default withRouter(Item);