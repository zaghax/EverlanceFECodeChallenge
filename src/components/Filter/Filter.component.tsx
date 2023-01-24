import { useState } from 'react'
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
      className='border-gray-200 border-solid border p-1 mr-2 flex items-center'
    >
      <input
        type='text'
        onChange={setFilterValue}
        placeholder='Enter userame or email'
        className='outline-none'
      />
      <button type='submit'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 48 48'
          width='25px'
          height='25px'
          className='opacity-50'
        >
          <path d='M 20.5 6 C 12.509634 6 6 12.50964 6 20.5 C 6 28.49036 12.509634 35 20.5 35 C 23.956359 35 27.133709 33.779044 29.628906 31.75 L 39.439453 41.560547 A 1.50015 1.50015 0 1 0 41.560547 39.439453 L 31.75 29.628906 C 33.779044 27.133709 35 23.956357 35 20.5 C 35 12.50964 28.490366 6 20.5 6 z M 20.5 9 C 26.869047 9 32 14.130957 32 20.5 C 32 23.602612 30.776198 26.405717 28.791016 28.470703 A 1.50015 1.50015 0 0 0 28.470703 28.791016 C 26.405717 30.776199 23.602614 32 20.5 32 C 14.130953 32 9 26.869043 9 20.5 C 9 14.130957 14.130953 9 20.5 9 z' />
        </svg>
      </button>
    </form>
  )
}

export default Filter
