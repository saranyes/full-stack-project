
import { useState } from 'react'
import Navbar from '../Components/Navbar'

const Bus = () => {


    return (
        <div>

            <Navbar />
            <div class="flex mt-10 justify-center px-4">
                <div class="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md">
                    <h2 class="text-2xl font-semibold text-center mb-6 text-blue-600">Book Your Bus</h2>

                    <form class="space-y-4">
                        {/* <!-- From --> */}
                        <div>
                            <label for="from" class="block text-sm font-medium text-gray-700">From</label>
                            <input
                                type="text"
                                id="from"
                                placeholder="Enter departure city"
                                class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>

                        {/* <!-- To --> */}
                        <div>
                            <label for="to" class="block text-sm font-medium text-gray-700">To</label>
                            <input
                                type="text"
                                id="to"
                                placeholder="Enter destination city"
                                class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>

                        {/* <!-- Date --> */}
                        <div>
                            <label for="date" class="block text-sm font-medium text-gray-700">Date</label>
                            <input
                                type="date"
                                id="date"
                                class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>

                        {/* <!-- Search Button --> */}
                        <button
                            type="submit"
                            class="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
                        >
                            Search Buses
                        </button>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default Bus
