import React, { useEffect } from 'react'
import CardList from '../../components/CardList/CardList.component'
import Filter from '../../components/Filter/Filter.component'
import useDispatchHttpData from '../../utils/hooks/useDispatchHttpData'

const HomePage = () => {
  const listPath = 'search/users?q=gabriel&page=1&per_page=10'
  const dispatchList = 'cardList'
  const { dispatchData } = useDispatchHttpData()

  useEffect(() => {
    dispatchData(listPath, dispatchList)
  }, [])

  return (
    <>
      <h1>HomePage</h1>
      <Filter />
      <CardList />
    </>
  )
}

export default HomePage
