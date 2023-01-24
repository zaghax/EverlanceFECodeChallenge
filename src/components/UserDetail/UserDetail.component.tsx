import { useContext } from 'react'
import { StoreContext } from '../../store/StoreContext'
import { Link } from 'react-router-dom'
import MapMarker from '../../UI/Icons/MapMarker'
import Envelope from '../../UI/Icons/Envelope'
import Twitter from '../../UI/Icons/Twitter'
import Anchor from '../../UI/Icons/Anchor'

const UserDetail = () => {
  const { store } = useContext(StoreContext)
  const { userDetail } = store
  return (
    <>
      {userDetail && (
        <>
          <div className='user-detail'>
            <div className='user-detail__col-left'>
              <img src={userDetail.avatar_url} alt={userDetail.name} className='user-detail__img' />
            </div>
            <div className='user-detail__col-right'>
              <div className='user-detail__info__row-1'>
                <div className='info__row1__col-left'>
                  <h1 className='info__heading'>{userDetail.name}</h1>
                  <p className='info__login-user'>{userDetail.login}</p>
                  {userDetail.bio && <p className='info__bio'>{userDetail.bio}</p>}
                </div>
                <div className='info__row1__col-right'>
                  <div className='info__counters'>
                    <div className='p-2'>
                      <span className='info__counters__heading'>Repos</span>
                      <p className='info__counters__counter'>{userDetail.public_repos}</p>
                    </div>
                    <div className='p-2'>
                      <span className='info__counters__heading'>Followers</span>
                      <p className='info__counters__counter'>{userDetail.followers}</p>
                    </div>
                    <div className='p-2'>
                      <span className='info__counters__heading'>Following</span>
                      <p className='info__counters__counter'>{userDetail.following}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='user-detail__info__row-2'>
                <div className='info__row2__col-left'>
                  {userDetail.location && (
                    <p className='info__location'>
                      <MapMarker />
                      {userDetail.location}
                    </p>
                  )}
                  {userDetail.email && (
                    <p className='info__email'>
                      <Envelope />
                      {userDetail.email}
                    </p>
                  )}
                </div>
                <div className='info__row2__col-right'>
                  {userDetail.twitter_username && (
                    <p>
                      <a
                        href={`https://twitter.com/${userDetail.twitter_username}`}
                        target='_blank'
                        rel='noreferrer'
                        className='info__twitter'
                      >
                        <Twitter />
                        {userDetail.twitter_username}
                      </a>
                    </p>
                  )}
                  {userDetail.blog && (
                    <p>
                      <a
                        href={userDetail.blog}
                        target='_blank'
                        rel='noreferrer'
                        className='info__blog'
                      >
                        <Anchor />
                        {userDetail.blog}
                      </a>
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
          <Link to='/' className='btn btn-blue w-40'>
            Go Back
          </Link>
        </>
      )}
    </>
  )
}

export default UserDetail
