
export interface cardInfoDataTypes {
    userInfo: string
    userName: string
    userEmail: string
}

export interface StoreState {
    cardList: cardDataTypes[]
    userDetail: cardInfoDataTypes | object
}
