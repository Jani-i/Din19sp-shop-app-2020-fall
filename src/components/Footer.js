import React from 'react'
import styles from './Footer.module.css'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <div className={styles.container}>
            <div className={styles.column1}>
                <ul>
                    <h3>Contact information:</h3>
                    <li>123-DONTCALLME</li>
                    <li>krhumaja@email.dont</li>
                    <li>FAX +1-212-1111111</li>
                    <li>Dont contact us.</li>
                </ul>
            </div>
            <div className={styles.column2}>
                <ul>
                    <h3>Offices:</h3>
                    <li>Oulu</li>
                    <li>Helsinki(soon)</li>
                    <li>Nevada(soon)</li>
                    <li>Turku(soon)</li>
                </ul>
            </div>
            <div className={styles.column2}>
                <ul>
                    <h3>Best animal danger ratings since yesterday!</h3>
                    <li><Link className={ styles.about } to='/about'>About us</Link></li>
                </ul>
            </div>
                
        </div>
    )
}
