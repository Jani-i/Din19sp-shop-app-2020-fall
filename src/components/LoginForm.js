import React, {useState} from 'react'
import styles from '../routes/LoginPage.module.css'
import { Link, Redirect } from 'react-router-dom'
import Axios from 'axios';


export default function LoginForm(props) {
    const [ isUserLogged, setIsUserLogged ] = useState(false);
    const [state, setState] = useState({
        username : "",
        password : ""
    })
    const handleChange = (e) => {
        const {id, value} = e.target
        setState(prevState => ({
            ...prevState,
            [id] : value
        }))
    }

    function processLoginClick(history){
        console.log('click')

        Axios.post('http://localhost:4000/user/login',
                    {},
                     { auth: {
                         username: state.username,
                         password: state.password
                     }
                    })
                    .then(response => {
                        console.log('Login Successful');
                        setIsUserLogged(true);
                        props.showError(null)
                        props.showSuccess("Account found and authorized.")
                        props.shouldHide(false)
                        

                    })
                    .catch(error => console.log(error));
                    props.showError("Something went wrong. Please check username and password.")
                    props.showSuccess(null)
    }
    return (
        <div>

                <h1 className={ styles.formTitle }>LOG IN:</h1>
                <div className={ styles.formItem }>
                    <label className={ styles.formLabel }>Username:</label><br></br>
                    <input type="text"
                    className={ styles.inputBox }
                    id="username"
                    placeholder="Username"
                    onChange={ handleChange }/>
                </div>
                <div className={ styles.formItem }>
                    <label className={ styles.formLabel }>Password:</label><br></br>
                    <input type="password"
                    className={ styles.inputBox }
                    id="password"
                    placeholder="Password"
                    onChange={ handleChange }/>
                </div>
                <button type="submit" className={ styles.loginButton } onClick={ processLoginClick }>Log In</button>
        </div>
    )
}
