import { useState } from 'react'
import SearchIcon from '../../UI/Icons/SearchIcon'
import useDispatchHttpData from '../../utils/hooks/useDispatchHttpData'

const Filter = () => {
  const [inputValue, setInputValue] = useState<string>('')
  const { dispatchData } = useDispatchHttpData()

  const listPath = `search/users?q=${inputValue}&page=1&per_page=12`
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
    <form
      onSubmit={filterHandler}
      className='filter-input'
    >
      <input
        type='text'
        onChange={setFilterValue}
        placeholder='Enter userame or email'
        className='outline-none'
      />
      <button type='submit'>
        <SearchIcon />
      </button>
    </form>
  )
}

export default Filter
