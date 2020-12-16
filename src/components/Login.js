import React from 'react'
import styles from './Header.module.css'
import {Link} from 'react-router-dom'

export default function Login() {
    return (
        <div className={ styles.loginregister }>
            <Link className={ styles.login } to="/animals">ALL Animals</Link>
        </div>
    )
}
