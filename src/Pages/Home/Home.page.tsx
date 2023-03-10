import React, { useEffect, useContext } from 'react'
import { StoreContext } from '../../store/StoreContext'

import CardList from '../../components/CardList/CardList.component'
import Filter from '../../components/Filter/Filter.component'
import Paginator from '../../components/Paginator/Paginator.component'
import useDispatchHttpData from '../../utils/hooks/useDispatchHttpData'

const HomePage = () => {
  const { store } = useContext(StoreContext)
  const { searchParam, currentPage } = store
  const listPath = `search/users?q=${searchParam}&page=${currentPage}&per_page=12`
  const dispatchList = 'cardList'
  const { dispatchData } = useDispatchHttpData()

  useEffect(() => {
    dispatchData(listPath, dispatchList)
  }, [])

  return (
    <div className='mt-4'>
      <div className='card-list-tools'>
        <h1 className='card-list-tools__heading'>GitHub Users</h1>
        <div className='card-list-tools__tools'>
          <Filter />
          <Paginator />
        </div>
      </div>
      <CardList />
    </div>
  )
}

export default HomePage
