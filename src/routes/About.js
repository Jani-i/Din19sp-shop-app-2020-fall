import React from 'react'
import styles from './About.module.css'

export default function About() {
    return (
        <div>
            <div className={ styles.backgroundImage }/>
            <div className={ styles.container }>
                <h1 className={ styles.title }>ABOUT</h1>
                <div className={ styles.descContainer }>
                    <p className={ styles.description }><h2>Yes hello</h2>
                    We here at Krhu maja rate animals with danger points to tell you how dangerous they are.
                    <h2>What is DP?</h2>
                    DP is the our invention to rate an animal in terms of how easily it could beat up one of our test subjects.
                    <br/>DP stands for Danger Points. The scale starts from 1 but does not currently have a ceiling since you never know what animal is found next.
                    <h2>Some statements</h2>
                    Some animals rated on the site might or might not be fictional.
                    <br/>We at Krhu maja are not responsible for any damage caused people trying to test their strength after seeing our ratings.
                    <br/>This site was made from 100% recyclable materials.
                    <br/>Cthulhu is yet to answer our letters, but we shall keep trying.</p>
                </div>
            </div>
        </div>
    )
}
