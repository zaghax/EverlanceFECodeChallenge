import { useContext } from 'react'
import { StoreContext } from '../../store/StoreContext'

import Card from '../Card/Card.component'

const CardList = () => {
  const { store } = useContext(StoreContext)
  const { cardList } = store

  return (
    <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
      {cardList.length > 0 && cardList.map((card) => <Card cardInfo={card} key={card.id} />)}
    </div>
  )
}

export default CardList
