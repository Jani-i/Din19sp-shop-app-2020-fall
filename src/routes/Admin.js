import React,{ useState } from 'react';
import AddItems from '../components/AddItems';
import AlertComponent from '../components/AlertComponent';

export default function Admin() {

    const [errorMessage, updateErrorMessage] = useState(null);
    const [successMessage, updateSuccessMessage] = useState(null);

    return (
        <div>
            <AddItems showError={ updateErrorMessage } showSuccess={ updateSuccessMessage } />
            <AlertComponent errorMessage = { errorMessage } hideError = { updateErrorMessage } 
                    successMessage = { successMessage } hideSuccess = {updateSuccessMessage} />
        </div>
    )
}
