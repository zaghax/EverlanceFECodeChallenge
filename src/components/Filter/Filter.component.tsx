import { useState } from 'react'
import useDispatchHttpData from '../../utils/hooks/useDispatchHttpData'

const Filter = () => {
  const [inputValue, setInputValue] = useState<string>('')
  const { dispatchData } = useDispatchHttpData()

  const listPath = `search/users?q=${inputValue}&page=1&per_page=10`
  const dispatchList = 'cardList'

  const filterHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    dispatchData(listPath, dispatchList)
  }

  const setFilterValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    setInputValue(value)
  }

  return (
    <form onSubmit={filterHandler}>
      <input type='text' onChange={setFilterValue} placeholder='Enter userame or email' />
      <button type='submit'>Send</button>
    </form>
  )
}

export default Filter
