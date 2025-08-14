import React from 'react'
import Navbar from '../Components/Navbar'
import homebg from '../assets/homebg.jpg'


const Home = () => {
    return (
        <div>
            <Navbar />
            <div className='relative'>
                <p className='text-2xl flex justify-center items-center pt-10 px-30 absolute font-semibold'>
                    BookTickts is your all in one travel companion, offering seamless booking experiences across flights, hotels, cabs, visas, and curated holiday packages. Whether you're planning a quick domestic getaway or an international adventure, BookTickts connects you to top destinations like Goa, Jaipur, Udaipur, and Rishikesh, as well as global hotspots including Dubai, Singapore, Thailand, and the Maldives. Our platform supports everything from one-way and round-trip flights to corporate travel solutions, GST-compliant invoicing, and secure payment options. With partnerships across airlines, hotels, and travel agents, we empower travelers and businesses alike. Explore our wide range of services including homestays, villas, travel insurance, forex cards, and visa applications for countries like Japan, Australia, and Sri Lanka. BookTickts also offers gift cards for special occasions and curated trip ideas for romantic getaways, beach holidays, and honeymoon destinations. From luxury stays like Fairmont Jaipur and JW Marriott Mumbai to budget-friendly options across India and abroad, we have got your accommodation covered. Our site also features real-time flight status, cheap ticket deals, and a dedicated support team to ensure your journey is smooth from start to finish. Whether you're a solo explorer, a family planner, or a corporate traveler, BookTickts is built to make every trip memorable, efficient, and hassle-free.
                </p>
                <img src={homebg} alt='logo' className='absolute opacity-40' />
            </div>

        </div>
    )
}

export default Home
