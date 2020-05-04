import {createContext, h} from 'preact' /** @jsx h */
import {useState, useContext} from 'preact/hooks'

export const StoreContext = createContext()

export const StoreProvider = ({children}) => {
  const [cities, setCities] = useState([])
  const [stocks, setStocks] = useState({
    details: [],
    week: [],
    month: [],
    year: [],
    threeYear: []
  })
  const [timeframe, setTimeframe] = useState("month")
  const [type, setType] = useState("actual")

  return (
    <StoreContext.Provider value={{
      stocks,
      setStocks,
      cities,
      setCities,
      timeframe,
      setTimeframe,
      type,
      setType
    }}>
      {children}
    </StoreContext.Provider>
  )
}

export const useStore = () => useContext(StoreContext)