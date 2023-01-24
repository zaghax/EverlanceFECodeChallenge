import { useEffect } from 'react'
import { cardInfoDataTypes } from '../../types/types'
import useDispatchHttpData from '../../utils/hooks/useDispatchHttpData'
import { useNavigate } from 'react-router-dom'
import Github from '../../UI/Icons/Github'

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
    if (!isLoading && !error && response) {
      navigate('/user-detail')
    }
  }, [isLoading, error, response])

  return (
    <div className='card'>
      <div className='card__row-1'>
        <img
          src={cardInfo.avatar_url}
          alt={cardInfo.login}
          className='card__img'
        />
        <p className='card__info'>{cardInfo.login}</p>
      </div>
      <div className='card__row-2'>
        <span>
          <Github />
        </span>
        <button type='button' onClick={setSelectedUser} className='card__button'>
          View profile
        </button>
      </div>
    </div>
  )
}

export default Card
