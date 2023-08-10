import React, { useContext } from 'react'
import { contextHandel } from '../Context'


function Home() {
  const {mode} = useContext(contextHandel);
  return (
    <div className={mode ? "w-100 vh-100" : "w-100 vh-100 dark-mode"} >
      Home
    </div>
  )
}

export default Home
