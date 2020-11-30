import React from 'react'
import styles from './Header.module.css'
import Login from './Login'
import Searchbar from './Searchbar'
import Logo from './Logo'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <div className={ styles.container }>
            <div className={ styles.logoContainer}>
                <Link to='/'>
                    <Logo/>
                </Link>
            </div>

            <div className={ styles.searchContainer }>
                <Searchbar/>
            </div>
            
            <div className={ styles.loginContainer }>
                <Login/>
            </div>
            
        </div>
    )

}
