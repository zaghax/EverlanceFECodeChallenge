import { useContext } from 'react'
import { StoreContext } from '../../store/StoreContext'

import Card from '../Card/Card.component'

const CardList = () => {
  const { store } = useContext(StoreContext)
  const { cardList } = store

  const noElements = (
    <div className='section-title'>
      <h3>Uupps!!!, there are no elements! </h3>
    </div>
  )

  return (
    <div className='card-list'>
      {cardList.length > 0 ? (
        cardList.map((card) => <Card cardInfo={card} key={card.id} />)
      ) : (
        <>{noElements}</>
      )}
    </div>
  )
}

export default CardList
