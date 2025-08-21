
import { FaBus } from "react-icons/fa";
import { IoIosTrain } from "react-icons/io";
import { FaCar } from "react-icons/fa";
import { LuHotel } from "react-icons/lu";
import { MdOutlineFlightTakeoff } from "react-icons/md";
import { MdCurrencyExchange } from "react-icons/md";
import { RiVisaLine } from "react-icons/ri";
import { Link } from 'react-router-dom';
import { use, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";






const Navbar = () => {

  const [open, setopen] = useState(false)
  return (

    <div className="flex flex-col pt-4 bg-white shadow-lg justify-center items-center gap-10">
      {/* Header */}
      <div className="flex items-center justify-between gap-20 px-6 py-4">
        <h1 className="text-3xl font-bold text-gray-800">Book Your Tickets</h1>
        <button
          className="cursor-pointer sm:hidden text-3xl text-gray-700 "
          onClick={() => setopen(!open)}
        >
          <GiHamburgerMenu />
        </button>
      </div>

      {/* Menu */}
      <ul className="hidden sm:flex gap-8 font-semibold justify-center pb-6 text-gray-700 text-lg">
        <li>
          <Link to="/Flights" className="flex flex-col items-center gap-1 hover:text-blue-500 transition">
            <MdOutlineFlightTakeoff className="text-2xl" />
            Flights
          </Link>
        </li>
        <li>
          <Link to="/train" className="flex flex-col items-center gap-1 hover:text-blue-500 transition">
            <IoIosTrain className="text-2xl" />
            Train
          </Link>
        </li>
        <li>
          <Link to="/bus" className="flex flex-col items-center gap-1 hover:text-blue-500 transition">
            <FaBus className="text-2xl" />
            Bus
          </Link>
        </li>
        <li>
          <Link to="/Stay" className="flex flex-col items-center gap-1 hover:text-blue-500 transition">
            <LuHotel className="text-2xl" />
            Stay
          </Link>
        </li>
        <li>
          <Link to="/Cab" className="flex flex-col items-center gap-1 hover:text-blue-500 transition">
            <FaCar className="text-2xl" />
            Cab
          </Link>
        </li>
        <li>
          <Link to="/Visa" className="flex flex-col items-center gap-1 hover:text-blue-500 transition">
            <RiVisaLine className="text-2xl" />
            Visa
          </Link>
        </li>
        <li>
          <Link to="/CE" className="flex flex-col items-center gap-1 hover:text-blue-500 transition">
            <MdCurrencyExchange className="text-2xl" />
            Currency Exchange
          </Link>
        </li>
        <li>
          <Link to="/User" className="flex flex-col items-center gap-1 hover:text-blue-500 transition">
            User
          </Link>
        </li>
      </ul>





      {/* mobile-deopdown */}
      {
        open && (
          <ul className="grid grid-cols-2 gap-4 p-4 w-full max-w-md">
            <li className="bg-gray-100 hover:bg-blue-500 hover:text-white transition rounded-xl shadow-md py-3 flex items-center justify-center cursor-pointer font-semibold">
              Flight
            </li>
            <li className="bg-gray-100 hover:bg-blue-500 hover:text-white transition rounded-xl shadow-md py-3 flex items-center justify-center cursor-pointer font-semibold">
              Bus
            </li>
            <li className="bg-gray-100 hover:bg-blue-500 hover:text-white transition rounded-xl shadow-md py-3 flex items-center justify-center cursor-pointer font-semibold">
              Cab
            </li>
            <li className="bg-gray-100 hover:bg-blue-500 hover:text-white transition rounded-xl shadow-md py-3 flex items-center justify-center cursor-pointer font-semibold">
              Train
            </li>
            <li className="bg-gray-100 hover:bg-blue-500 hover:text-white transition rounded-xl shadow-md py-3 flex items-center justify-center cursor-pointer font-semibold">
              Visa
            </li>
            <li className="bg-gray-100 hover:bg-blue-500 hover:text-white transition rounded-xl shadow-md py-3 flex items-center justify-center cursor-pointer font-semibold">
              Hotel
            </li>
            <li className="bg-gray-100 hover:bg-blue-500 hover:text-white transition rounded-xl shadow-md py-3 flex items-center justify-center cursor-pointer font-semibold col-span-2">
              Currency Exchange
            </li>
          </ul>

        )
      }

    </div >
  )
}
export default Navbar
