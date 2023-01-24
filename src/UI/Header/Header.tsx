import { Link } from 'react-router-dom'
import Logo from '../Logo/Logo'

const Header = () => {
  return (
    <header className='header'>
      <Link to='/'>
        <Logo />
      </Link>
    </header>
  )
}

export default Header
