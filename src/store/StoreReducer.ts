import { StoreState, cardInfoDataTypes, responseDataTypes } from '../types/types'

const initialStore: StoreState = {
  cardList: [],
  userDetail: null,
  totalResults: 0,
  searchParam: 'gabriel',
  currentPage: 1,
}

export type ActionsType =
  | { type: 'setCardList'; payload: cardInfoDataTypes[] }
  | { type: 'setSelectedUserInfo'; payload: responseDataTypes | null }
  | { type: 'setTotalResults'; payload: number }
  | { type: 'setSearchParam'; payload: string }
  | { type: 'setCurrentPage'; payload: number }

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
    case 'setCurrentPage':
      return {
        ...state,
        currentPage: action.payload,
      }
    default:
      return state
  }
}

export { initialStore }
export default storeReducer
