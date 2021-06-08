import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallangeContext'
import styles from '../styles/components/CompletedChallenges.module.css'

export function CompletedChallenges(){

    const {challengesCompleted} = useContext(ChallengesContext)

    return (
        <div className={styles.completedChallenges}>
            <span> Desafios completos </span>
            <span> {challengesCompleted} </span>
        </div>
    )
}