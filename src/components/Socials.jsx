import {
  ImFacebook,
  ImTwitter,
  ImPinterest,
  ImInstagram
} from 'react-icons/im'
import { useCursorContext } from '../context/CursorContext'

const Socials = () => {

  const {mouseEnterHandler, mouseLeaveHandler} = useCursorContext()
  

  return (
    <div
    onMouseEnter={mouseEnterHandler}
  onMouseLeave={mouseLeaveHandler}
    className="hidden xl:flex ml-24">
      <ul className='flex gap-x-4 items-center justify-center'>
        <li>
          <a href="#"><ImFacebook /></a>
        </li>
        <li>
          <a href="#"><ImTwitter /></a>
        </li>
        <li>
          <a href="#"><ImPinterest /></a>
        </li>
        <li>
          <a href="#"><ImInstagram /></a>
        </li>
      </ul>
    </div>
  )
}

export default Socials