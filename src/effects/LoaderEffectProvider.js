import {createContext, h} from 'preact' /** @jsx h */
import Loader from './Loader'
import {useState, useContext, useLayoutEffect, useRef} from 'preact/hooks'

const LoaderEffectContext = createContext()
export const useLoaderEffect = () => useContext(LoaderEffectContext)

export const LoaderEffectProvider = ({children}) => {
  const [loaded, setLoaded] = useState(false)
  const loader = useRef(null)
  
  useLayoutEffect(() => {
    if (loader && loader.current) loader.current.style.opacity = loaded ? 0 : 1
  }, [loaded])

  return (
    <LoaderEffectContext.Provider value={{loaded, setLoaded}}>
      <Loader ref={loader} style={{opacity: loaded ? 0 : 1}} />
      {children}
    </LoaderEffectContext.Provider>
  )
}