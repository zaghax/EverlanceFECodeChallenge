import { StoreState, cardInfoDataTypes, responseDataTypes } from '../types/types'

const initialStore: StoreState = {
  cardList: [],
  userDetail: null,
  totalResults: 0,
  searchParam: 'gabriel',
}

export type ActionsType =
  | { type: 'setCardList'; payload: cardInfoDataTypes[] }
  | { type: 'setSelectedUserInfo'; payload: responseDataTypes | null }
  | { type: 'setTotalResults'; payload: number }
  | { type: 'setSearchParam'; payload: string }

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
    case 'setTotalResults':
      return {
        ...state,
        totalResults: action.payload,
      }
    case 'setSearchParam':
      return {
        ...state,
        searchParam: action.payload,
      }
    default:
      return state
  }
}

export { initialStore }
export default storeReducer
