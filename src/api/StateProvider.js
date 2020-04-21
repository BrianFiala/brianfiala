import {createContext, h} from 'preact' /** @jsx h */
import {useState, useContext} from 'preact/hooks'

export const StateContext = createContext()

export const StateProvider = ({children}) => {
  const [cities, setCities] = useState([])
  const [stocks, setStocks] = useState([])

  return (
    <StateContext.Provider value={{
      stocks,
      setStocks,
      cities,
      setCities
    }}>
      {children}
    </StateContext.Provider>
  )
}

export const useStore = () => useContext(StateContext)