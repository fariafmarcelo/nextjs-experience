import styles from '../styles/components/Countdown.module.css'
import {useEffect, useState} from 'react'


let countdownTimeout: NodeJS.Timeout

export function Countdown(){

    //declarar variável time -> tempo 
    const [time, setTime] = useState(0.1 * 60) // converte para segundos
    // declarar variável active -> coundown está ativo
    const [isActive, setIsActive] = useState(false)

    // declarar variável que guarda os minutos
    const minutes = Math.floor(time / 60) // minuto arredondado
    // declarar variável que guarda os segundos
    const seconds = time % 60 // resto da divisão por 60
    
    // 13 minuteLeft 1 minuteRight 3
    // 3  03 minuteLeft 0 minuteRight 3
    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('')  
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('')

    // acabou de terminar
    const [hasFinished, setHasFinished] = useState(false)

    function startCountdown(){
            setIsActive(true)
    }

    // react -> useEffect será executado toda vez a variável active ou time forem alteradas
    useEffect( () => {
        if (isActive && time > 0 ){
            countdownTimeout = setTimeout( () => { // de 1 em 1 segundo o time vai diminuir em 1
                setTime(time - 1) // chama o useEffect com time valendo 1 a menos
            }, 1000)
        }
        else if (isActive && time == 0){
            setHasFinished(true)
            setIsActive(false)
        }
    }, [isActive, time]) // 

    function resetCountdown(){
        setTime(25 * 60)
        clearTimeout(countdownTimeout)
        setIsActive(false)
    }

    return (
        <div>
            <div className={styles.countdown}>
                <div>
                    <span> {minuteLeft} </span>
                    <span> {minuteRight} </span>
                </div>
                <span> : </span>
                <div>
                    <span> {secondLeft} </span>
                    <span> {secondRight} </span>
                </div>
            </div>
            
            {hasFinished ? (
                <button 
                    disabled 
                    type="button" 
                    className={styles.countdownButton}>
                Ciclo encerrado
            </button>
            ) : (
                <>
                      { isActive ? (
                <button onClick={resetCountdown} type="button" className={styles.countdownButtonActive}>
                Abandonar ciclo
            </button>
            ) : (
                <button onClick={startCountdown} type="button" className={styles.countdownButton}>
                    Iniciar ciclo
                </button>
            )}
                </>
            )}

          

            
            
        </div>
    )
}