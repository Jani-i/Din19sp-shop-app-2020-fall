import React from 'react'
import styles from './Header.module.css'
import {Link} from 'react-router-dom'

export default function Login() {
    return (
        <div className={ styles.loginregister }>
            <Link className={ styles.login } to="/login">Login</Link>
            <Link className={ styles.register } to="/register">Register</Link>
        </div>
    )
}
