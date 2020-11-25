import React from 'react';


function AlertComponent(props) {
    
    
    return(
        <div 
            role="alert" 
            id="alertPopUp"
        >
            <div>
                <span>{ props.errorMessage }</span>
                <span>{ props.successMessage }</span>
            </div>
            
        </div>
    )
} 

export default AlertComponent;