import { useContext, useEffect, useCallback, useState } from 'react'
import { StoreContext } from '../../store/StoreContext'
import useHttp from './useHttp'

const useDispatchHttpData = () => {
  const { dispatch } = useContext(StoreContext)
  const { response, isLoading, error, getData } = useHttp()
  const [storgeLocation, setStorageLocation] = useState<string>('')

  const dispatchData: (requestPath: string, store: string) => void = useCallback(
    (requestPath, store) => {
      getData(requestPath)
      setStorageLocation(store)
    },
    [],
  )

  useEffect(() => {
    
    if (storgeLocation !== '') {
      if (!isLoading && !error && response) {
        if (storgeLocation === 'cardList') {
          dispatch({ type: 'setCardList', payload: [] })
          dispatch({ type: 'setCardList', payload: response.items })
        }
        if (storgeLocation === 'selectedUserInfo') {
          dispatch({ type: 'setSelectedUserInfo', payload: null })
          dispatch({ type: 'setSelectedUserInfo', payload: response })
          console.log(response)
        }
      }
    }
  }, [isLoading, error, response, storgeLocation])

  return { dispatchData, isLoading, error, response }
}

export default useDispatchHttpData
