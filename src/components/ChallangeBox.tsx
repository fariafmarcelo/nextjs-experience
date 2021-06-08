import { useContext } from 'react'
import styles from '../styles/components/ChallangeBox.module.css'
import { ChallengesContext } from '../contexts/ChallangeContext'

export function ChallangeBox() {

    const {activeChallenge, resetChallenge} = useContext(ChallengesContext)

    return (
        <div className={styles.challangeBoxContainer}>

            { activeChallenge ? (
                <div className={styles.challengeBoxActive}>
                <header>
                    Ganhe {activeChallenge.amount} XP
                </header>
                <main>
                    <img src={`icons/${activeChallenge.type}.svg`}></img>
                    <strong> Novo Desafio </strong>
                    <p> {activeChallenge.description} </p>
                </main>
                <footer>
                    <button onClick={resetChallenge} className={styles.challengeBoxActiveFailedButton} type="button"> Falhei </button>
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