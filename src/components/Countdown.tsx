import styles from "../styles/components/Countdown.module.css"
import { useState } from 'react'

export function Countdown() {

    // declara a variavel time
    const [time, setTime] = useState(25 * 60)
    //declara a variavel active
    const [active, setActive] = useState(false)

    //declara a variavel que guarda os minutos
    const minutes = Math.floor(time / 60)
    const seconds = (time % 60)

    // minutos 12 ok / 4 em 04
    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('')
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('')

    function startCountdown() {
        setActive(true)
    }

    return (
        <div>
            <div className={styles.countdown}>
                <div>
                    <span> 2 </span>
                    <span> 5 </span>
                </div>
                <span> : </span>
                <div>
                    <span> 0 </span>
                    <span> 0 </span>
                </div>
            </div>
            <button onClick={startCountdown} type="button" className={styles.countdownButton}>
                Iniciar ciclo
            </button>
        </div>
    )
}