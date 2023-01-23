import { Routes, Route, Navigate } from 'react-router-dom'
import HomePage from '../../Pages/Home/Home.page'
import UserDetailPage from '../../Pages/UserDetail/UserDetail.page'
import MainContainer from '../../UI/MainContainer/MainContainer'

const Router = () => {
  const error404 = (
    <div className='section-title'>
      <h3>Uupps!!!, there is nothing here! </h3>
    </div>
  )

  return (
    <MainContainer>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path="/home" element={<Navigate replace to="/" />} />
        <Route path='/user-detail' element={<UserDetailPage />} />
        <Route path='*' element={error404} />
      </Routes>
    </MainContainer>
  )
}

export default Router
