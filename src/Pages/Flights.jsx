
import MainContent from '../Components/MainContent'


const Flights = () => {
    return (
        <div>
            <MainContent />
            <div className='flex gap-10 font-semibold z-2 bg-white  shadow-lg  justify-center h-100'>
                <ul className='flex gap-10 font-semibold pt-15 justify-center '>
                    <li><input type='checkbox' />Outsatation One-Way</li>
                    <li><input type='checkbox' />Outsatation Round-Trip</li>
                </ul>
            </div>
        </div>


    )
}

export default Flights
