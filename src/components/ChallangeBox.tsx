import { useContext } from 'react'
import styles from '../styles/components/ChallangeBox.module.css'
import { ChallengeBoxContext } from '../contexts/ChallangeBoxContext'

export function ChallangeBox() {

    const contextData = useContext(ChallengeBoxContext)

    console.log(contextData)

    let hasActiveChallange = true

    return (
        <div className={styles.challangeBoxContainer}>

            { hasActiveChallange ? (
                <div className={styles.challengeBoxActive}>
                <header>
                    Ganhe 400 XP
                </header>
                <main>
                    <img src="icons/body.svg"></img>
                    <strong> Novo Desafio </strong>
                    <p> Levante e faça 100 BURPS </p>
                </main>
                <footer>
                    <button className={styles.challengeBoxActiveFailedButton} type="button"> Falhei </button>
                    <button className={styles.challengeBoxActiveSucceededButton} type="button"> Completei </button>
                </footer>
            </div>
            ) : (
                <div className={styles.challangeBoxNotActive}>
                    <strong> Finalize um ciclo para receber o desafio </strong>
                    <p>
                        <img src="icons/level-up.svg"></img>
                        Avance de level completando desafios.
                    </p>
                </div>
            ) }
        </div>
    )
}