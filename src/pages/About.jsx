import { images } from "../utils"
import { Link } from "react-router-dom"




const About = () => {
  return (
    <section className="section">
      <div className="container mx-auto h-full relative">

        <div className="flex flex-col-reverse lg:flex-row h-full items-center justify-center
        gap-x-24 text-center lg:text-left lg:pt-16">

          <div className="flex-1 max-h-96 lg:max-h-max overflow-hidden">
            <img src={images.AboutWoman} alt="woman" />
          </div>

          <div className="flex-1 pt-36 pb-14 lg:pt-0 lg:w-auto z-10 flex flex-col justify-center
          items-center lg:items-start">
            <h1 className="h1">
              About me
            </h1>
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
            className="btn"
            to='portfolio'
            >
            View my work
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About