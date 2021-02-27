import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'
import styles from '../styles/components/Profile.module.css'

export function Profile() {
    const { level } = useContext(ChallengesContext)

    const imgURL = "https://avatars.githubusercontent.com/u/66335189?s=400&u=96ba4f0a45b955eeaf5fb763c9b7f3c0139b2fb3&v=4"

    return (
        <div className={styles.profileContainer} >
            <img src={imgURL} alt="Apolinário Manuel" />
            <div>
                <strong>Apolinário Manuel</strong>
                <p>
                    <img src="icons/level.svg" alt="Level" />
                    Level {level}
                </p>
            </div>
        </div>
    )
}