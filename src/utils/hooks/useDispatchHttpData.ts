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
          dispatch({ type: 'setTotalResults', payload: 0 })
          dispatch({ type: 'setTotalResults', payload: response.total_count })
        }
        if (storgeLocation === 'selectedUserInfo') {
          dispatch({ type: 'setSelectedUserInfo', payload: null })
          dispatch({ type: 'setSelectedUserInfo', payload: response })
        }
      }
    }
  }, [isLoading, error, response, storgeLocation])

  return { dispatchData, isLoading, error, response }
}

export default useDispatchHttpData
