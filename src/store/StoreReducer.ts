import { StoreState, cardInfoDataTypes, responseDataTypes } from '../types/types'

const initialStore: StoreState = {
  cardList: [],
  userDetail: null,
}

export type ActionsType =
  | { type: 'setCardList'; payload: cardInfoDataTypes[] }
  | { type: 'setSelectedUserInfo'; payload: responseDataTypes | null }

const storeReducer = (state: StoreState, action: ActionsType): StoreState => {
  switch (action.type) {
    case 'setCardList':
      return {
        ...state,
        cardList: action.payload,
      }
    case 'setSelectedUserInfo':
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
