
import Navbar from "../../Components/Navbar"
import { useState } from "react"
import flightbg from "../../assets/flightbg.jpg";
import Displayflights from "../../Components/Displayflights";


const Flights = () => {

    const [nowdate, setnowdate] = useState(false)
    const togglenowdate = () => setnowdate(prev => !prev)

    const [roundtrip, setroundtrip] = useState(false)
    return (
        <div>
            <Navbar />
            <div className="relative ">
                <div>  <img src={flightbg} alt="bg" className="w-screen h-auto opacity-50" /></div>


                <div className="absolute inset-0 flex flex-col items-center gap-10   ">
                    <div>
                        <ul className="flex gap-20 pt-10 ">
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

                        <div className="flex flex-wrap  mt-4  bg-white  outline-1  rounded-xl font-semibold ">
                            <div className="flex flex-col px-4  py-2  ">
                                FROM
                                <input type="searchbar " className="outline-2 outline-gray-300 rounded-xl px-2" />

                            </div>
                            <div className="flex flex-col px-4 wpt-2">
                                TO
                                <input type="searchbar  " className="outline-2 outline-gray-300 rounded-xl px-2" />
                            </div>
                            <div className="flex flex-col px-4  py-2 cursor-pointer">
                                <h1 className="cursor-pointer" onClick={togglenowdate} >DEPARTURE</h1>


                                <input type="date" className="flex" />

                            </div>
                            {roundtrip && (
                                <div className="flex flex-col px-4   py-2">
                                    RETURN
                                    <input type="date" className="flex" />
                                </div>
                            )}
                        </div>

                        <div className="flex justify-center"><button className="px-20 bg-blue-400 flex justify-center items-center py-2 rounded-xl cursor-pointer">Search</button></div>
                    </div>
                    <Displayflights />

                </div>
            </div>
        </div >

    )
}

export default Flights
