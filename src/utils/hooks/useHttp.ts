import { useState, useCallback } from 'react'
import { API_BASE_URL } from '../constants'

const useHttp = () => {
  const [response, setResponse] = useState<any>()
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  const getData = useCallback(async (URL_PARAMS: string) => {
    const URL = `${API_BASE_URL}${URL_PARAMS}`
    const controller = new AbortController()

    try {
      const response: Response = await fetch(URL)

      if (!response.ok) {
        throw new Error('Something went wrong with the service!')
      }

      response.json().then((data) => {
        if (data.error) {
          setError(data.error)
        } else {
          setResponse(data)
        }
      })

      setIsLoading(false)
    } catch (error: any) {
      console.log(error)
      setError(error.message || 'Failed to fetch!')
      setIsLoading(false)
    }

    return () => {
      controller.abort()
    }
  }, [])

  return { response, isLoading, error, getData }
}

export default useHttp
