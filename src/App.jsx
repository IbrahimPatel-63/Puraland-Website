import { useState } from 'react'
import './App.css'
import { FaFacebookF } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import hand from './images/hand.png'
import pura from './images/pura.png'
import man from './images/man.png'
import women2 from './images/o.avif'
import man2 from './images/man2.png'
import computer from './images/computer.png'
import bulb from './images/bulb.png'
import thunder from './images/thunder.png'
import tv from './images/tv.png'
import infinite from './images/infinite.png'
import agency from './images/agency.png'
import later from './images/later.png'
import phone from './images/mobile.png'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <div className='h-screen w-full  relative'>
        <div className='h-full w-full bg-black opacity-70 absolute '></div>
      <div className='h-full w-full   absolute '>
        <nav className='h-[100px] w-full  flex items-center justify-between px-34 '>
          <img className='h-[30px]' src={pura} alt="pura" />
          <div className='flex text-[18px] text-white gap-12 font-semibold mr-12 cursor-pointer '>
          <p className='text-[#FB3E4E]'>Home</p>
          <p className='hover:text-[#fb3e4e] duration-400 linear '>About</p>
          <p className='hover:text-[#fb3e4e] duration-400 linear '>Team</p>
          <p className='hover:text-[#fb3e4e] duration-400 linear '>Services</p>
          <p className='hover:text-[#fb3e4e] duration-400 linear '>Contact</p>
        </div>

        <div className='flex gap-4 mr-4 text-white text-xl cursor-pointer'>
        <FaFacebookF />
        <FaGoogle />
        <FaTwitter />
        </div>
        </nav>
        <div className='h-[calc(100%-100px)]  flex items-center justify-center flex-col'>
          <p className='text-[28px] text-white font-semibold '>We are Prfffure</p>
          <h1 className='text-[55px] text-white font-bold text-center text-base/15 mt-8 mb-22'>Popular web development agency. Discover <br /> more possibilites of you website. </h1>
          <button className='px-[50px] py-[18px] bg-gradient-to-r from-[#FD3FA0] to-[#FD3E4F] text-white font-bold text-[18px]'>Discover us.</button>
        </div>
      </div>
        <img className='h-full w-full' src={hand} alt="" />
      
       
      </div>

      <div className='h-135 w-full bg-gradient-to-r from-[#FD3FA0] to-[#FD3E4F] flex justify-center'>
        <div className='h-full w-[82%]  flex items-start justify-center flex-col relative text-white'>
          <h1 className='text-[45px] font-bold'>About us.</h1>
          <h2 className='text-[36px] mt-18 mb-8 '>Pura comes with 11 unique and stunning demos. We have crafted each <br /> and every demo with extensive care and precision and the theme is <br /> power packed yet easy to use.</h2>
          <button className='text-[20px] bg-transparent text-white px-[32px] py-[15px] border-2 border-white rounded-4xl font-bold flex items-center gap-5 absolute bottom-16 right-0 '>Portfolio. < FaArrowRightLong className='mt-1 text-2xl' /></button>
        </div>
      </div>

      <div className='h-85 w-full bg-white flex justify-center  '>
        <div className='h-full w-105  hover:bg-gradient-to-t from-[#FD3FA0] to-[#FD3E4F]  flex flex-col justify-center pl-8 hover:text-white '>
          <h1 className='text-5xl font-bold'>01</h1>
          <h2 className='text-2xl font-bold mt-4 mb-2'>Design</h2>
          <p className='text-[16px]'>Proin facilisis varius nunc. Curabitur eros risus, ultrices et dui ut, luctus acfffcumsan nibh. Fusce convallis sapien placerat tellus suscipit vehicula.</p>
        </div>

        <div className='h-full w-105  hover:bg-gradient-to-t from-[#FD3FA0] to-[#FD3E4F]  flex flex-col justify-center pl-8 hover:text-white '>
          <h1 className='text-5xl font-bold'>02</h1>
          <h2 className='text-2xl font-bold mt-4 mb-2'>New Idea's</h2>
          <p className='text-[16px]'>Proin facilisis varius nunc. Curabitur eros risus, ultrices et dui ut, luctus acfffcumsan nibh. Fusce convallis sapien placerat tellus suscipit vehicula.</p>
        </div>

        <div className='h-full w-105  hover:bg-gradient-to-t from-[#FD3FA0] to-[#FD3E4F]  flex flex-col justify-center pl-8 hover:text-white '>
          <h1 className='text-5xl font-bold'>03</h1>
          <h2 className='text-2xl font-bold mt-4 mb-2'>Trending</h2>
          <p className='text-[16px]'>Proin facilisis varius nunc. Curabitur eros risus, ultrices et dui ut, luctus acfffcumsan nibh. Fusce convallis sapien placerat tellus suscipit vehicula.</p>
        </div>
      </div>

      <div className='h-50 w-full bg-white flex items-center'>
        <h1 className='text-5xl font-bold ml-32'>Our team.</h1>
      </div>

      <div className='h-140 w-full bg-white flex items-center justify-center gap-8'>
        <div className='h-[475px] w-[390px] bg-white flex items-center flex-col relative'>
          <div className='h-[80%] w-full absolute bg-gradient-to-r from-[#FD3FA0] to-[#FD3E4F] text-white flex items-center justify-center flex-col opacity-0 hover:opacity-85 duration-500'>
          <h1 className='text-xl font-bold mt-3 mb-1'> Mark John</h1>
          <p className='text-[#9A9A9A] text-[16px] mb-4 font-semibold text-white'>Developer</p>
          <div className='flex gap-4 '>
          <FaFacebookF />
        <FaGoogle />
        <FaTwitter />
          </div>
          </div>


          <img className='h-[80%] w-full object-cover' src={man} alt="man" />
          <h1 className='text-xl font-bold mt-3 mb-1'> Mark John</h1>
          <p className='text-[#9A9A9A] text-[16px]'>Developer</p>
        </div>



        <div className='h-[475px] w-[390px] bg-white flex items-center flex-col relative'>
          <div className='h-[80%] w-full absolute bg-gradient-to-r from-[#FD3FA0] to-[#FD3E4F] text-white flex items-center justify-center flex-col opacity-0 hover:opacity-85 duration-500'>
          <h1 className='text-xl font-bold mt-3 mb-1'>Sarah Levo</h1>
          <p className='text-[#9A9A9A] text-[16px] mb-4 font-semibold text-white'>Designer</p>
          <div className='flex gap-4 '>
          <FaFacebookF />
        <FaGoogle />
        <FaTwitter />
          </div>
          </div>




          <img className='h-[80%] w-full object-cover' src={women2} alt="man" />
          <h1 className='text-xl font-bold mt-3 mb-1'>Sarah Levo</h1>
          <p className='text-[#9A9A9A] text-[16px]'>Designer</p>
        </div>

        <div className='h-[475px] w-[390px] bg-white flex items-center flex-col relative'>
          <div className='h-[80%] w-full absolute bg-gradient-to-r from-[#FD3FA0] to-[#FD3E4F] text-white flex items-center justify-center flex-col opacity-0 hover:opacity-85 duration-500'>
          <h1 className='text-xl font-bold mt-3 mb-1'>Xavi Miko</h1>
          <p className='text-[#9A9A9A] text-[16px] mb-4 font-semibold text-white'>CEO</p>
          <div className='flex gap-4 '>
          <FaFacebookF />
        <FaGoogle />
        <FaTwitter />
          </div>
          </div>




          <img className='h-[80%] w-full object-cover' src={man2} alt="man" />
          <h1 className='text-xl font-bold mt-3 mb-1'>Xavi Miko</h1>
          <p className='text-[#9A9A9A] text-[16px]'>CEO</p>
        </div>





      </div>

      <div className='h-145 w-full bg-white flex'>
        <div className='h-full w-[45%]  pt-16'>
          <img className=' object-cover' src={computer} alt="computer" />
        </div>




        <div className='h-full w-[55%]  flex justify-center flex-col pl-10' >
          <h1 className='text-[45px] font-bold text-base/13 '>Innovative solutions <br /> to boost your creative <span className='text-[#FD3E4F]'>projects.</span></h1>
          <p className='text-[22px] text-[#717171] mt-15 mb-15'>Proin ex orci, feugiat sit amet diam ac, tincidunt imperdiet <br /> urna.Donec sed quam at tortor aliquam  rutrum sit amet tempus <br /> enim. Fusce consectetur  lorem eu tellus semper ornare. Nullam <br /> purus leo, imperdiet eget tempus a, mattis vitae eros.</p>
          <button className=' h-15 w-48 font-bold text-[18px] text-white  bg-gradient-to-r from-[#FD3FA0] to-[#FD3E4F]'>Button Text</button>
        </div>
      </div>

      <div className='h-150 w-full bg-[#1D1D1D] '>
        <div className='h-1/2 w-full  flex items-center justify-evenly text-white pl-11'>
        <h1 className='text-[40px] font-bold'>Suite of features that <br /> make Pura one of the <br /> best agency on <span className='text-[#FD3E4F]'>2017.</span></h1>
        
        <div className='w-90 '>
          <img className='ml-2' src={bulb} alt="bulb" />
          <h1 className='text-[22px] font-bold mt-4 mb-2'>Unique layouts</h1>
          <p className='text-[#E1E1E1]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type .</p>
        </div>

        <div className='w-90 '>
          <img className='ml-2' src={thunder} alt="thunder" />
          <h1 className='text-[22px] font-bold mt-4 mb-2'>New features</h1>
          <p className='text-[#E1E1E1]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type .</p>
        </div>
     

        </div>



        <div className='h-1/2 w-full  flex  justify-evenly pl-5'>
        <p className='w-82 text-[20px] text-[#DFDFDF] relative left-6'>Proin ex orci, feugiat sit amet diam ac, tincidunt imperdiet urna.Donec sed quam at tortor aliquamrutrum sit amet tempus enim. Fusce consectetur lorem eu tellus semper ornare. Nullam purus leo,imperdiet eget tempus.</p>

        
        <div className='w-90 ml-25  '>
          <img className='ml-2' src={tv} alt="tv" />
          <h1 className='text-[22px] font-bold mt-4 mb-2 text-white'>Responsive design</h1>
          <p className='text-[#E1E1E1]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type .</p>
        </div>

        <div className='w-90'>
          <img className='ml-2' src={infinite} alt="infinite" />
          <h1 className='text-[22px] font-bold mt-4 mb-2 text-white'>And more & more ...</h1>
          <p className='text-[#E1E1E1]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type .</p>
        </div>
          
        </div>




      </div>

      <div className='h-90 w-full  flex'>
        <div className='h-full w-1/2  flex  justify-center flex-col pl-34'>
        <img className='w-45' src={agency} alt="pura agency" />
        <p className='text-[#525151]  mt-18'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem <br /> Ipsum hasbeen the industry's standard dummy text ever since the 1500s, when an <br /> unknown printer took a galley of type .</p>
        </div>



        <div className='h-full w-1/2  flex justify-center flex-col pl-10 pt-10'>
          <h1 className='font-bold text-2xl'>Reach us</h1>
          <p className='mt-8'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          <div className='flex items-center gap-2.5 mt-6 mb-4'>
            <img className='h-[14px]' src={later} alt="later" />
            <p className='text-[14px]'>support@themeptation.com</p>
          </div>

          <div className='flex items-center gap-2.5 mb-6'>
            <img className='h-4' src={phone} alt="phone" />
            <p className='text-[14px]'>+001-123-456-7890</p>
          </div>

          <div className='flex gap-6 text-[#FD3E51]'>
          <FaFacebookF />
        <FaGoogle />
        <FaTwitter />

          </div>
        </div>
      </div>

      <div className='h-24 w-full bg-white flex pt-5 justify-center'>
        <p className='font-bold text-[#FD3E4F]  text-[14px]'>© 2017 Design by themeptation // Developed in webflow by..</p>
      </div>
 
    </div>
  
  )
}

export default App
