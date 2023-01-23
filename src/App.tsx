import React, { useEffect } from 'react'
import useHttp from './utils/hooks/useHttp'

function App() {
  const { isLoading, error, response, getData } = useHttp()
  const params = 'users?q=gabriel&page=1&per_page=10'

  useEffect(() => {
    getData(params);
  }, [])

  useEffect(() => {
    console.log(response)
  }, [response])

  return (
    <div className='App'>
      <h1>Hi!</h1>
    </div>
  )
}

export default App
