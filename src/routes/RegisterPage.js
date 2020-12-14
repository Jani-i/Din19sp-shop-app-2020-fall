import React,{useState} from 'react'
import RegisterForm from '../components/RegisterForm'
import AlertComponent from '../components/AlertComponent'
import styles from './RegisterPage.module.css'

export default function RegisterPage() {

    const [errorMessage, updateErrorMessage] = useState(null);
    const [successMessage, updateSuccessMessage] = useState(null);

    return (
        <>
        <div className={ styles.container }>
            <div className={ styles.backgroundImage } />
            <div className={ styles.formContainer }>
                <RegisterForm showError={ updateErrorMessage } showSuccess={ updateSuccessMessage } />
                </div>
                <div className={ styles.alertComponent }>
                    <AlertComponent errorMessage = { errorMessage } hideError = { updateErrorMessage } 
                        successMessage = { successMessage } hideSuccess = {updateSuccessMessage} />
                </div>

        </div>
        </>
    )
}
