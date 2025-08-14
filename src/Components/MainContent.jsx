
import { FaBus } from "react-icons/fa";
import { IoIosTrain } from "react-icons/io";
import { FaCar } from "react-icons/fa";
import { LuHotel } from "react-icons/lu";
import { MdOutlineFlightTakeoff } from "react-icons/md";
import { MdCurrencyExchange } from "react-icons/md";
import { RiVisaLine } from "react-icons/ri";
import { Link } from 'react-router-dom';
import Navbar from "./Navbar";



const MainContent = () => {
  return (

    <div className='  text-xl bg-blue-400 '>
      <Navbar />

      <ul className='flex gap-10 font-semibold justify-center bg-gray-200 items-center py-2 '>

        <buttton className="cursor-pointer ">
          <li className="flex flex-col items-center w-30 top-0" >
            <MdOutlineFlightTakeoff />
            <Link to="/Flights">Flights</Link>
          </li>
        </buttton>


        <buttton className="cursor-pointer ">
          <li className="flex flex-col items-center w-30 top-0" >
            <IoIosTrain />
            <Link to="/train">Train</Link>
          </li>
        </buttton>

        <buttton className="cursor-pointer )">
          <li className="flex flex-col items-center w-30 top-0" >
            <FaBus />
            <Link to="/bus">
              Bus</Link>
          </li>
        </buttton>

        <buttton className="cursor-pointer ">
          <li className="flex flex-col items-center w-30 top-0">
            <LuHotel />
            <Link to="/Stay">Stay</Link>
          </li>
        </buttton>

        <buttton className="cursor-pointer " >
          <li className="flex flex-col items-center w-30 top-0">
            <FaCar />
            <Link to="/Cab">Cab</Link>
          </li>
        </buttton>

        <buttton className="cursor-pointer " >
          <li className="flex flex-col items-center w-30 top-0">
            <RiVisaLine />
            <Link to="/Visa">Visa</Link>
          </li>
        </buttton>

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
export default MainContent
