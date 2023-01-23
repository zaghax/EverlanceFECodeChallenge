import { useContext } from 'react'
import { StoreContext } from '../../store/StoreContext'

const UserDetail = () => {
  const { store } = useContext(StoreContext)
  const { userDetail } = store
  return (
    <>
      {userDetail && (
        <div>
          <img src={userDetail.avatar_url} alt={userDetail.name} />
          <p>NAME: {userDetail.name}</p>
          <p>USER: {userDetail.login}</p>
          <p>LOCATION: {userDetail.location}</p>
          <p>EMAIL: {userDetail.email}</p>
          <p>TWITTER: {userDetail.twitter_username}</p>
          <p>BLOG: {userDetail.blog}</p>
          <p>GITHUB: {userDetail.location}</p>
          <p>
            REPOS:
            <a href={userDetail.repos_url} target='_blank' rel='noreferrer'>
              {userDetail.public_repos}
            </a>
          </p>
          <p>
            FOLLOWERS:
            <a href={userDetail.followers_url} target='_blank' rel='noreferrer'>
              {userDetail.followers}
            </a>
          </p>
          <p>
            FOLLOWING:
            <a href={userDetail.following_url} target='_blank' rel='noreferrer'>
              {userDetail.following}
            </a>
          </p>
        </div>
      )}
    </>
  )
}

export default UserDetail
