import React from 'react';
import styles from './AlertComponent.module.css'


function AlertComponent(props) {
    
    
    return(
        <div 
            role="alert" 
            id="alertPopUp"
        >
            <div>
                <span className={ styles.error } >{ props.errorMessage }</span>
                <span className={ styles.success } >{ props.successMessage }</span>
            </div>
            
        </div>
    )
} 

export default AlertComponent;