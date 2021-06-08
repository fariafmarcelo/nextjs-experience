import styles from '../styles/components/ExperienceBar.module.css'
import {ChallengesContext} from '../contexts/ChallangeContext'
import { useContext } from 'react'

export function ExperienceBar(){

    const {currenceExperience, experienceToNextLevel} = useContext(ChallengesContext)

    const percentToNextLevel = Math.round((currenceExperience*100)/experienceToNextLevel)

    return (
        <header className={styles.experienceBar}>
            <span> 0 XP </span>
            <div>
                <div style={{width: `${percentToNextLevel}%`}}>
                    <span className={styles.currentExperience} style={{left: `${percentToNextLevel}%`}}>
                        {currenceExperience} XP
                    </span>
                </div>
            </div>
            <span>  {experienceToNextLevel} XP </span>
        </header>
    )
}