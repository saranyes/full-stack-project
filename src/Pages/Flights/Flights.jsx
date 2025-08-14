
import Navbar from "../../Components/Navbar"
import { use, useState } from "react"
import flightbg from "../../assets/flightbg.jpg";
import DatePicker from "react-datepicker";


const Flights = () => {

    const now = new Date();
    const day = now.toLocaleString("en-us", { weekday: "long" })
    const date = now.getDate();
    const month = now.toLocaleString("en-us", { month: "long" })
    const year = now.getFullYear();

    const [nowdate, setnowdate] = useState(false)
    const togglenowdate = () => setnowdate(prev => !prev)

    const [roundtrip, setroundtrip] = useState(false)
    return (
        <div>
            <Navbar />
            <div className="relative w-screen">
                <img src={flightbg} alt="bg" className="w-full h-auto opacity-50" />

                <div className="absolute inset-0 flex flex-col items-center gap-10 z-10">
                    <ul className="flex font-semibold gap-20 pt-10">
                        <li>
                            <input
                                type="checkbox"
                                checked={!roundtrip}
                                onChange={() => setroundtrip(false)}
                            /> One-Way
                        </li>
                        <li>
                            <input
                                type="checkbox"
                                checked={roundtrip}
                                onChange={() => setroundtrip(true)}
                            /> Round-Trip
                        </li>
                    </ul>

                    <div className="flex flex-wrap  mt-4  bg-white drop-shadow-xl drop-shadow-gray-400 outline-1 outline-gray-100 rounded-xl font-semibold">
                        <div className="flex flex-col px-4 w-100 py-2">
                            FROM
                            <input type="searchbar" />

                        </div>
                        <div className="flex flex-col px-4 w-100 py-2">
                            TO
                            <h1>Bangaluru</h1>
                            <input type="searchbar" />
                        </div>
                        <div className="flex flex-col px-4 w-100 py-2 cursor-pointer">
                            <h1 className="cursor-pointer" onClick={togglenowdate} >DEPARTURE</h1>
                            <h1 onClick={togglenowdate} className="cursor-pointer">{date}/{day}/{year}</h1>
                            {nowdate && (
                                <input type="date" className="flex" />
                            )}
                        </div>
                        {roundtrip && (
                            <div className="flex flex-col px-4 w-100  py-2">
                                RETURN
                                <input type="date" className="flex" />

                            </div>
                        )}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Flights
