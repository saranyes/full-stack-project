const url = 'https://aerodatabox.p.rapidapi.com/flights/airports/iata/YYZ?offsetMinutes=-120&durationMinutes=720&withLeg=true&direction=Both&withCancelled=true&withCodeshared=true&withCargo=true&withPrivate=true&withLocation=false';
const options = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': '25c04c1bc0msh666e40a96187646p1ec5a7jsnec7ee089388f',
        'x-rapidapi-host': 'aerodatabox.p.rapidapi.com'
    }
};

try {
    const response = await fetch(url, options);
    const result = await response.text();
    console.log(result);
} catch (error) {
    console.error(error);
}