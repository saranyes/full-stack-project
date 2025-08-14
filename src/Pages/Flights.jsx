import flightbg from "../assets/flightbg.jpg"
import Navbar from "../Components/Navbar"

const Flights = () => {
    return (
        <div>
            <Navbar />
            <div className='flex gap-10 font-semibold bg-blue-100  shadow-lg  justify-center text-2xl relative'>
                <img src={flightbg} alt="bg" className=" opacity-50" />
            </div>
            <div>
                <ul className='flex  font-semibold py-15 justify-center items-center gap-50'>
                    <li><input type='checkbox' className="text-2xl" /> One-Way</li>
                    <li><input type='checkbox' className="text-2xl" /> Round-Trip</li>
                </ul>
            </div>

        </div>


    )
}

export default Flights
