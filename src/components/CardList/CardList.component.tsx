import { useContext } from 'react'
import { StoreContext } from '../../store/StoreContext'

import Card from '../Card/Card.component'

const CardList = () => {

  const {store} = useContext(StoreContext);
  const { cardList } = store;

  return (
    <>
      <h1>CardList</h1>
      {cardList.length > 0 && (
        cardList.map(card => <Card cardInfo={card} key={card.id}/>)
      )}
    </>
  )
}

export default CardList
