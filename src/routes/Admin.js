import React,{ useState, useEffect } from 'react';
import AddItems from '../components/AddItems';
import AlertComponent from '../components/AlertComponent';
import styles from './Admin.module.css';
import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';
import ModifyItem from '../components/ModifyItem';

export default function Admin() {

    const [errorMessage, updateErrorMessage] = useState(null);
    const [successMessage, updateSuccessMessage] = useState(null);
    const [shouldHide, updateHideState] = useState(true);

    return (
        <div>
            <div className={ styles.backgroundImage }></div>
            <div className={ styles.container }>
                <div className={ styles.alert }> 
                <p className={ styles.notification }>Notification box</p>
                <AlertComponent errorMessage = { errorMessage } hideError = { updateErrorMessage } 
                        successMessage = { successMessage } hideSuccess = {updateSuccessMessage} />
                </div>

            <div className={ styles.formContainer }>
                {shouldHide ? 
                <LoginForm showError={ updateErrorMessage } showSuccess={ updateSuccessMessage } shouldHide={ updateHideState } />
                : null}
                </div>
                <div>
                {shouldHide ? 
                    null : 
                    <>
                    <AddItems showError={ updateErrorMessage } showSuccess={ updateSuccessMessage } />
                    <ModifyItem showError={ updateErrorMessage } showSuccess={ updateSuccessMessage } />
                    <RegisterForm showError={ updateErrorMessage } showSuccess={ updateSuccessMessage } />
                    
                    </>}
                </div>
            </div>
        </div>
    )
}
