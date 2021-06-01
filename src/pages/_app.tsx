import '../styles/globals.css'
import { ChallengeBoxContext } from '../contexts/ChallangeBoxContext'
import { useState } from 'react'

function MyApp({ Component, pageProps }) {

  let[level, setLevel] = useState(1)
  return (
      <ChallengeBoxContext.Provider value={level}>
        <Component {...pageProps} />
      </ChallengeBoxContext.Provider>
  )
}

export default MyApp
