import React, { Component, useState, useEffect } from 'react'
import styles from './Header.module.css'

export default class Searchbar extends Component {

    constructor(props)
    {
        super(props);
        this.state = {
        searchFieldString: "",
        usernameString: "",
        passwordString: "",
        }
    }

    onSearchFieldChange = (event) => {
        this.setState({searchFieldString: event.target.value})
    }
    
    

    render() {
        return (
            <div>
                <input type={Text} className={ styles.searchbar } onChange={this.onSearchFieldChange} value={this.state.searchFieldString}></input>
            </div>
        )
    }
}
