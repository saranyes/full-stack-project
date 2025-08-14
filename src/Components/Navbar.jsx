
import { FaBus } from "react-icons/fa";
import { IoIosTrain } from "react-icons/io";
import { FaCar } from "react-icons/fa";
import { LuHotel } from "react-icons/lu";
import { MdOutlineFlightTakeoff } from "react-icons/md";
import { MdCurrencyExchange } from "react-icons/md";
import { RiVisaLine } from "react-icons/ri";
import { Link } from 'react-router-dom';




const Navbar = () => {
  return (

    <div className=' flex  pt-2  shadow-black drop-shadow-xl' >


      <ul className='flex gap-10 font-semibold justify-center pb-5  w-full bg-white text-black pt-10 px-10 text-2xl'>
        {/* Flight */}
        <buttton className="cursor-pointer ">
          <li  >
            <Link to="/Flights" className="flex flex-col items-center w-30 top-0"> <MdOutlineFlightTakeoff /> Flights</Link>
          </li>
        </buttton>
        {/* train */}
        <buttton className="cursor-pointer ">
          <li  >
            <Link to="/train" className="flex flex-col items-center w-30 top-0"><IoIosTrain />  Train</Link>
          </li>
        </buttton>
        {/* bus */}
        <buttton className="cursor-pointer )">
          <li  >

            <Link to="/bus" className="flex flex-col items-center w-30 top-0">
              <FaBus /> Bus</Link>
          </li>
        </buttton>
        {/* Stay */}
        <buttton className="cursor-pointer ">
          <li >
            <Link to="/Stay" className="flex flex-col items-center w-30 top-0"> <LuHotel /> Stay</Link>
          </li>
        </buttton>
        {/* cab */}
        <buttton className="cursor-pointer " >
          <li >

            <Link to="/Cab" className="flex flex-col items-center w-30 top-0">  <FaCar /> Cab</Link>
          </li>
        </buttton>
        {/* Visa */}
        <buttton className="cursor-pointer " >
          <li >

            <Link to="/Visa" className="flex flex-col items-center w-30 top-0"> <RiVisaLine />Visa</Link>
          </li>
        </buttton>
        {/* currency Exchange */}
        <buttton className="cursor-pointer ">
          <li className="flex flex-col  items-center w-30 top-0" >
            <MdCurrencyExchange />
            <Link to="/CE">
              Currency </Link>
            <Link to="/CE">
              Exchange </Link>
          </li>
        </buttton>
      </ul>


    </div>
  )
}
export default Navbar
