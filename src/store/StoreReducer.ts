import { StoreState, cardInfoDataTypes } from '../types/types'

const initialStore: StoreState = {
  cardList: [],
  userDetail: {},
}

export type ActionsType =
  | { type: 'setCardList'; payload: cardInfoDataTypes[] }
  | { type: 'setCardInfo'; payload: cardInfoDataTypes }

const storeReducer = (state: StoreState, action: ActionsType): StoreState => {
  switch (action.type) {
    case 'setCardList':
      return {
        ...state,
        cardList: action.payload,
      }
    case 'setCardInfo':
      return {
        ...state,
        userDetail: action.payload,
      }
    default:
      return state
  }
}

export { initialStore }
export default storeReducer
