import  {} from 'react-icons'
import { Link } from 'react-router-dom'
import { data, images } from '../utils'


const Header = () => {
  return (
    <header className='fixed w-full px-[1.8rem] lg:px-[100px] z-30
    h-[100px] lg:h-[140px] flex items-center'>
      <div className="flex flex-col lg:flex-row lg:items-center w-full justify-between">

        <Link>
        <img src={images.Logo} alt="logo" />
        </Link>

        <nav className='hidden lg:flex'>
          <ul>
            {
              data.navData.map(({name, href}, i) => (
                <li key={i}>
                  <Link 
                  className='capitalize text-[#696c6d] hover:text-primary transition'
                  to={href}
                  >
                  {name}
                  </Link>
                </li>
              ))
            }
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header