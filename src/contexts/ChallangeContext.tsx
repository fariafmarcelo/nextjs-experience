import { createContext, useState, ReactNode } from 'react'
import challenges from '../../challenges.json'

interface Challange { // criando um tipo de dado
    type: 'body' | 'eye',
    description: string,
    amount: number
}

interface ChallangesContextData { // criando um tipo de dado
    level: number,
    currenceExperience: number,
    challengesCompleted: number,
    startNewChallenge: () => void,
    levelUp: () => void,
    activeChallenge: Challange,
    resetChallenge: () => void,
    experienceToNextLevel: number
}

interface ChallangesProviderProps { // criando um tipo de dado
    children: ReactNode
}

export const ChallengesContext = createContext({} as ChallangesContextData)

export function ChallangesProvider({children}: ChallangesProviderProps) {

    let [level, setLevel] = useState(5)
    let [currenceExperience, setCurrenceExperience] = useState(20)
    let [challengesCompleted, setChallengesCompleted] = useState(0)

    let experienceToNextLevel = Math.pow(( level + 1 ) * 4, 2)

    let [activeChallenge, setActiveChallenge] = useState(null)

    function resetChallenge() {
        setActiveChallenge(null)
    }

    function startNewChallenge() {
        // random start
        const randowChallengeIndex = Math.floor(Math.random() * challenges.length)
        const challenge = challenges[randowChallengeIndex]
        setActiveChallenge(challenge)
    }

    function levelUp(){
        setLevel(level + 1)
    }

    return (
        <ChallengesContext.Provider value={
            {
                level,
                currenceExperience,
                challengesCompleted,
                startNewChallenge,
                levelUp,
                activeChallenge,
                resetChallenge,
                experienceToNextLevel
            }
        }>
            {children}
        </ChallengesContext.Provider>
    )
}