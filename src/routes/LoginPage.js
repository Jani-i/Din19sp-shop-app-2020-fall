import React,{ useState } from 'react'
import styles from './LoginPage.module.css'
import AlertComponent from '../components/AlertComponent';
import LoginForm from '../components/LoginForm';


export default function LoginPage(props) {

    const [errorMessage, updateErrorMessage] = useState(null);
    const [successMessage, updateSuccessMessage] = useState(null);

    return (
        <div className={ styles.container }>
            <div className={ styles.backgroundImage }></div>
            <div className={ styles.formContainer }>
                <LoginForm showError={ updateErrorMessage } showSuccess={ updateSuccessMessage } />
                </div>
                <div className={ styles.alertComponent }>
                    <AlertComponent errorMessage = { errorMessage } hideError = { updateErrorMessage } 
                        successMessage = { successMessage } hideSuccess = {updateSuccessMessage} />
                </div>

        </div>
    )
}
