import { useContext } from 'react'
import { StoreContext } from '../../store/StoreContext'
import useDispatchHttpData from '../../utils/hooks/useDispatchHttpData'

const Paginator = () => {
  const { dispatchData } = useDispatchHttpData()
  const { store, dispatch } = useContext(StoreContext)
  const { totalResults, searchParam, currentPage } = store

  let maxPagesLength = 50
  const resultsPerPage = 12
  const availablePages = totalResults / resultsPerPage
  const dispatchList = 'cardList'

  if (availablePages < maxPagesLength) {
    maxPagesLength = availablePages
  }

  const setPaginatorValue = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const page = +event.target.value
    const listPath = `search/users?q=${searchParam}&page=${page}&per_page=${resultsPerPage}`
    dispatchData(listPath, dispatchList)
    dispatch({ type: 'setCurrentPage', payload: page })
  }

  const selectElements = []

  for (let i = 1; i < maxPagesLength + 1; i++) {
    selectElements.push(
      <option value={i} key={i}>
        {i}
      </option>,
    )
  }

  return (
    <select
      name='select'
      onChange={setPaginatorValue}
      defaultValue={currentPage}
      className='border-gray-200 border-solid border p-1'
    >
      {selectElements}
    </select>
  )
}

export default Paginator
