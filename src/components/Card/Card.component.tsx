
import { useEffect } from 'react'
import { cardInfoDataTypes } from '../../types/types'
import useDispatchHttpData from '../../utils/hooks/useDispatchHttpData'
import { useNavigate } from 'react-router-dom'

interface propsTypes {
  cardInfo: cardInfoDataTypes
}

const Card = ({ cardInfo }: propsTypes) => {
  const userPath = `users/${cardInfo.login}`
  const dispatchUser = 'selectedUserInfo'
  const navigate = useNavigate()

  const { dispatchData, isLoading, error, response } = useDispatchHttpData()

  const setSelectedUser = () => {
    dispatchData(userPath, dispatchUser)
  }

  useEffect(() => {
    if(!isLoading && !error && response){
      navigate('/user-detail')
      console.log('tomalo')
    }
  }, [isLoading, error, response])

  return (
    <div>
      <img src={cardInfo.avatar_url} alt={cardInfo.login} />
      <p>{cardInfo.login}</p>
      <button type='button' onClick={setSelectedUser}>
        View Profile
      </button>
    </div>
  )
}

export default Card
