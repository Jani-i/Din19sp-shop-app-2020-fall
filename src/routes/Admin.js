import React,{ useState, useEffect } from 'react';
import AddItems from '../components/AddItems';
import AlertComponent from '../components/AlertComponent';

export default function Admin() {

    const [errorMessage, updateErrorMessage] = useState(null);
    const [successMessage, updateSuccessMessage] = useState(null);

    useEffect(() => {
        checkAuth();
    }, []);

    const checkAuth = async () => {
        const data = await fetch(
            'http://localhost:4000/checkauth'
        );
        }

    return (
        <div>
            <AddItems showError={ updateErrorMessage } showSuccess={ updateSuccessMessage } />
            <AlertComponent errorMessage = { errorMessage } hideError = { updateErrorMessage } 
                    successMessage = { successMessage } hideSuccess = {updateSuccessMessage} />
        </div>
    )
}
