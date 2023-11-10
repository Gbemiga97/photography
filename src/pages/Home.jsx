import { Link } from "react-router-dom"
import { images, variants } from "../utils"
import { motion } from "framer-motion"
import { useCursorContext } from "../context/CursorContext"


const Home = () => {


  const {mouseEnterHandler, mouseLeaveHandler} = useCursorContext()

  return (
    <motion.section 
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}
    transition={variants.transition1}
    className="section">
      <div className="container mx-auto h-full relative">

        <div className="flex flex-col justify-center ">

          <motion.div
             initial={{opacity: 0, y: '-50%'}}
             animate={{opacity: 1, y: 0}}
             exit={{opacity: 0, y: '-50%'}}
             transition={variants.transition1}
             onMouseEnter={mouseEnterHandler}
             onMouseLeave={mouseLeaveHandler}
          className="w-full pt-36 pb-14 lg:pt-0 lg:pb-0 lg:w-auto
          z-10 lg:absolute flex flex-col justify-center items-center lg:items-start">
            <h1 className="h1">
              photographer <br /> & film maker</h1>
              <p className="text-[26px] lg:text-[36px] font-primary mb-4 lg:mb-12">
                Los Angeles, USA </p>
                <Link
                className="btn mb-[1.8rem]"
                to={'contact'}>
                  hire me
                </Link>
          </motion.div>


          <div className="flex justify-end max-h-96 lg:max-h-max">
            <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            transition={variants.transition1}
            className="relative lg:-right-40 overflow-hidden h-screen">
              <motion.img 
                onMouseEnter={mouseEnterHandler}
                onMouseLeave={mouseLeaveHandler}
              whileHover={{scale: 1.1}}
              transition={variants.transition1}
              src={images.HomeWoman} alt="woman" />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Home