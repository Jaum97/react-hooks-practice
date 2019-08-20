import { useEffect, useState } from 'react'

export const useLogger = <T>(logged: T): void => {
  const log = (): void => console.log(logged)
  useEffect(log, [ logged ])
}

export const useToggle = (initialState: boolean): [ boolean, () => void ] => {
  const [ state, setState ] = useState(initialState)

  const toggleState = () => {
    setState(!state)
  }

  return [ state, toggleState ]
}

interface IListItem<T> {
  label: string
  value: T
  selected: boolean
}

/* needs testing */
type ReturnType<T> = [Array<IListItem<T>>, (index: number) => void]

export function useRadioList<T>( initialState: Array<IListItem<T>> ): ReturnType<T> {
  const [ list, setList ] = useState(initialState)

  const selectItem = (index: number): void => {
    const newList = list.map((item, i) => 
      i === index 
        ? {...item, selected: true} 
        : {...item, selected: false})
        setList(newList)
  }

  return [ list, selectItem ]
}
