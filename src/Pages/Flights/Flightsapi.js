import axios from 'axios';

const options = {
    method: 'GET',
    url: 'https://booking-com15.p.rapidapi.com/api/v1/flights/getFlightDetails',
    params: {
        token: 'api/v1/flights/searchFlights',
        currency_code: 'AED'
    },
    headers: {
        'x-rapidapi-key': '25c04c1bc0msh666e40a96187646p1ec5a7jsnec7ee089388f',
        'x-rapidapi-host': 'booking-com15.p.rapidapi.com'
    }
};

try {
    const response = await axios.request(options);
    console.log(response.data);
} catch (error) {
    console.error(error);
}