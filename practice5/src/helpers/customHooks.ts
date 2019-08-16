import { useEffect, useState } from 'react'

export const useLogger = <T>(logged: T): void => {
  const log = (): void => console.log({[ logged ]: logged})
  useEffect(log, [ logged ])
}

export const useToggle = (initialState: boolean): [ boolean, () => void ] => {
  const [ state, setState ] = useState(initialState)

  const toggleState = () => {
    setState(!state)
  }

  return [ state, toggleState ]
}
