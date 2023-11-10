import { createContext, useContext, useEffect, useState } from "react"


const CursorContext = createContext()

export const useCursorContext = () => useContext(CursorContext)



const CursorProvider = ({children}) => {

  const [cursorPos, setCursorPos] = useState({
    x: 0,
    y: 0
  })


  const [cursorBg, setCursorBg] = useState('default')


  const mobileViewportIsActive = window.innerWidth < 768

  useEffect(() => {
    

    const move = (e) => {
      setCursorPos({
        x: e.clientX,
        y: e.clientY
      })
    }
    window.addEventListener('mousemove', move)

    return () => {
      window.removeEventListener('mousemove', move)
    }
  })

  const cursorVariants = {
    default: {
      x: cursorPos.x - 16,
      y: cursorPos.y - 16,
      backgroundColor: '#0e1112'
    },
    text: {
      width: '150px',
      height: '150px',
      x: cursorPos.x - 72,
      y: cursorPos.y - 72,
      backgroundColor: '#fff', 
      mixBlendMode: 'difference'
    }
  }

  const mouseEnterHandler = () => {
    setCursorBg('text')
  }

  const mouseLeaveHandler = () => {
    setCursorBg('default')
  }

  return (
    <CursorContext.Provider value={{cursorVariants,
     cursorBg,
     mouseEnterHandler,
     mouseLeaveHandler
     }}>
      {children}
    </CursorContext.Provider>
  )
}

export default CursorProvider