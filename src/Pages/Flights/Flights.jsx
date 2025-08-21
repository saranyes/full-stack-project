import Navbar from "../../Components/Navbar";
import { useState } from "react";

import Displayflights from "../../Components/Displayflights";

const Flights = () => {

    const today = new Date().toLocaleDateString("en-ca")

    const [departuredate, setDeparturedate] = useState(today)
    const [returndate, setReturndate] = useState(today)


    const [roundtrip, setroundtrip] = useState(false);
    return (
        <div>
            <Navbar />
            <div className="flex flex-wrap justify-center">
                <div className="flex flex-col items-center py-10 ">
                    {/* Trip Type Selection */}
                    <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-4xl">
                        <ul className="flex gap-10 justify-center border-b pb-4">
                            <li className="flex items-center gap-2">
                                <input
                                    type="radio"
                                    id="oneway"
                                    name="tripType"
                                    checked={!roundtrip}
                                    onChange={() => setroundtrip(false)}
                                    className="accent-blue-500"
                                />
                                <label className="cursor-pointer font-medium">
                                    One-Way
                                </label>
                            </li>
                            <li className="flex items-center gap-2">
                                <input
                                    type="radio"
                                    id="roundtrip"
                                    name="tripType"
                                    checked={roundtrip}
                                    onChange={() => setroundtrip(true)}
                                    className="accent-blue-500"
                                />
                                <label
                                    className="cursor-pointer font-medium">
                                    Round-Trip
                                </label>
                            </li>
                        </ul>

                        {/* Form Inputs */}
                        <div className="sm:flex sm:gap-4  mt-6 ">
                            <div className="flex flex-col justify-center ">
                                <label className="text-sm text-gray-600 font-semibold">
                                    FROM
                                </label>
                                <input
                                    type="text"
                                    placeholder="Enter departure city"
                                    className="border rounded-xl px-3 py-2 outline-none focus:ring-2 focus:ring-blue-400  md:w-50 "
                                />
                            </div>

                            <div className="flex flex-col justify-center">
                                <label className="text-sm text-gray-600 font-semibold">
                                    TO
                                </label>
                                <input
                                    type="text"
                                    placeholder="Enter destination city"
                                    className="border rounded-xl px-3 py-2 outline-none focus:ring-2 focus:ring-blue-400 md:w-50 "
                                />
                            </div>

                            <div className="flex flex-col justify-center">
                                <label className="text-sm text-gray-600 font-semibold">
                                    DEPARTURE
                                </label>
                                <input
                                    type="date"
                                    value={departuredate}
                                    onChange={(e) => setDeparturedate(e.target.value)}
                                    className="border rounded-xl px-3 py-2 outline-none focus:ring-2 focus:ring-blue-400 cursor-pointer md:w-50 "
                                />
                            </div>

                            {roundtrip && (
                                <div className="flex flex-col justify-center">
                                    <label className="text-sm text-gray-600 font-semibold">
                                        RETURN
                                    </label>
                                    <input
                                        type="date"
                                        value={returndate}
                                        onChange={(e) => setReturndate(e.target.value)}
                                        className="border rounded-xl px-3 py-2 outline-none focus:ring-2 focus:ring-blue-400 cursor-pointer md:w-50 "
                                    />
                                </div>
                            )}
                        </div>

                        {/* Search Button */}
                        <div className="flex justify-center mt-8">
                            <button className="px-10 py-3 bg-blue-500 text-white font-semibold rounded-xl shadow-lg hover:bg-blue-600 transition">
                                Search Flights
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center">
                <Displayflights />
            </div>
        </div>
    );
};

export default Flights;
