import {IoMdClose} from 'react-icons/io'
import {CgMenuRight} from 'react-icons/cg'
import { motion } from 'framer-motion'
import { data, variants } from '../utils'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const MobileNav = () => {

  const [showNav, setShowNav] = useState(false)


  return (
    <nav className='text-primary xl:hidden'>

      <button 
      onClick={() => setShowNav(true)}
      className='text-3xl cursor-pointer'>
        <CgMenuRight />
      </button>
      <motion.div
      variants={variants.menuVariants}
      initial='hidden'
      animate={`${showNav ? 'show' : ''}`}
      className='bg-white shadow-2xl w-full absolute top-0
      right-0 max-w-xs h-screen z-20'>

        <button 
        onClick={() => setShowNav(false)}
        className='text-4xl absolute z-30 left-4 cursor-pointer
        top-14 text-primary'>
          <IoMdClose/>
        </button>
       
       <ul className='flex flex-col items-center justify-center h-full
        gap-y-8 text-primary font-primary font-bold text-3xl'>
        {
          data.navData.map(({href, name}, i) => (
            <li key={i}>
              <Link
              onClick={() => setShowNav(false)}
              className='cursor-pointer capitalize'
              to={href} >
              {name}
              </Link>
            </li>
          ))
        }
       </ul>
      </motion.div>
    </nav>
  )
}

export default MobileNav