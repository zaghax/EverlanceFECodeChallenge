import React, { useEffect, useContext } from 'react'
import { StoreContext } from '../../store/StoreContext'

import CardList from '../../components/CardList/CardList.component'
import Filter from '../../components/Filter/Filter.component'
import Paginator from '../../components/Paginator/Paginator.component'
import useDispatchHttpData from '../../utils/hooks/useDispatchHttpData'

const HomePage = () => {
  const { store } = useContext(StoreContext)
  const { searchParam } = store
  const listPath = `search/users?q=${searchParam}&page=1&per_page=12`
  const dispatchList = 'cardList'
  const { dispatchData } = useDispatchHttpData()

  useEffect(() => {
    dispatchData(listPath, dispatchList)
  }, [])

  return (
    <>
      <h1>HomePage</h1>
      <Filter />
      <Paginator />
      <CardList />
    </>
  )
}

export default HomePage
