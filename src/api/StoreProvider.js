import {createContext, h} from 'preact' /** @jsx h */
import {useState, useContext} from 'preact/hooks'

export const StoreContext = createContext()

export const StoreProvider = ({children}) => {
  const [cities, setCities] = useState([])
  const [stocks, setStocks] = useState([])

  return (
    <StoreContext.Provider value={{
      stocks,
      setStocks,
      cities,
      setCities
    }}>
      {children}
    </StoreContext.Provider>
  )
}

export const useStore = () => useContext(StoreContext)