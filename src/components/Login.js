import React from 'react'
import styles from './Header.module.css'

export default function Login() {
    return (
        <div className={ styles.loginregister }>
            <div className={ styles.login }>Login</div>
            <div className={ styles.register }>Register</div>
        </div>
    )
}
