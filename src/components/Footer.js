import React from 'react'
import styles from './Footer.module.css'

export default function Footer() {
    return (
        <div className={styles.container}>
            <div className={styles.column1}>
                <ul>
                    <h3>Contact information</h3>
                    <li>Support</li>
                    <li>Have fun</li>
                    <li>Enjoy</li>
                    <li>Buy bear</li>
                </ul>
            </div>
            <div className={styles.column2}>
                <ul>
                    <h3>Shops</h3>
                    <li>Oulu</li>
                    <li>Helsinki</li>
                    <li>Nevada</li>
                    <li>Turku</li>
                </ul>
            </div>
                
        </div>
    )
}
