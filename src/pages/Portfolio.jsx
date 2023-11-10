import { Link } from "react-router-dom"
import { images, variants } from "../utils"
import { motion } from "framer-motion"
import { useCursorContext } from "../context/CursorContext"

const Portfolio = () => {


  const {mouseEnterHandler, mouseLeaveHandler} = useCursorContext()

  return (
    <motion.section
    initial={{opacity: 0, y: '100%'}}
    animate={{opacity: 1, y: 0}}
    exit={{opacity: 0, y:'100%'}}
    transition={variants.transition1}
    className="section">
     <div className="container mx-auto h-full relative">
      <div className="flex flex-col lg:flex-row h-full items-center 
      justify-start gap-x-24 text-center lg:text-left pt-24 lg:pt-36 pb-8">

        <motion.div
        onMouseEnter={mouseEnterHandler}
        onMouseLeave={mouseLeaveHandler}
            initial={{opacity: 0, y: '-80%'}}
            animate={{opacity: 1, y: 0}}
            exit={{opacity: 0, y:'-80%'}}
            transition={variants.transition1}
        className="flex flex-col lg:items-start">
          <h1 className="h1">
            Portfolio</h1>
          <p className="mb-12 max-w-[20rem] lg:max-w-full  ">
              Lorem ipsum dolor sit amet 
              consectetur adipisicing
               elit. Sapiente eos alias nemo iure sunt 
               tempore incidunt facere doloribus 
               nesciunt molestias.
               <br />
            <br />
       
              Lorem ipsum dolor, sit amet consectetur 
              adipisicing elit. Dolor eaque autem, 
              magnam incidunt earum quidem.
            </p>
            <Link 
            to='contact'
            className='btn mb-[1.8rem] mx-auto lg:mx-0'
            >
            Hire me
            </Link>
        </motion.div>

        <div 
        onMouseEnter={mouseEnterHandler}
        onMouseLeave={mouseLeaveHandler}
        className="grid grid-cols-2 lg:gap-2">
          <div className="max-w-[250px] lg:max-w-[320px] h-[187px]
          lg:h-[220px] bg-accent overflow-hidden">
            <img
            className="object-cover h-full lg:h-[220px] hover:scale-110 
            transition-all duration-500 "
             src={images.Portfolio1} alt="portfolio" />
          </div>

          <div className="max-w-[250px] lg:max-w-[320px] h-[187px]
          lg:h-[220px] bg-accent overflow-hidden">
            <img
            className="object-cover h-full lg:h-[220px] hover:scale-110 
            transition-all duration-500 "
             src={images.Portfolio2} alt="portfolio" />
          </div>

          <div className="max-w-[250px] lg:max-w-[320px] h-[187px]
          lg:h-[220px] bg-accent overflow-hidden">
            <img
            className="object-cover h-full lg:h-[220px] hover:scale-110 
            transition-all duration-500 "
             src={images.Portfolio3} alt="portfolio" />
          </div>

          <div className="max-w-[250px] lg:max-w-[320px] h-[187px]
          lg:h-[220px] bg-accent overflow-hidden">
            <img
            className="object-cover h-full lg:h-[220px] hover:scale-110 
            transition-all duration-500 "
             src={images.Portfolio4} alt="portfolio" />
          </div>
        </div>
      </div>
     </div>
    </motion.section>
  )
}

export default Portfolio