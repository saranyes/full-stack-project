import React from 'react'

const Displayflights = ({ data }) => {

    const { from, to, departuredate, returndate, roundtrip } = data;

    return (
        <div className="text-center mt-10">
            <h1>From: {from}</h1>
            <h1>To: {to}</h1>
            <h1>Departure Date: {departuredate}</h1>
            {roundtrip && <h1>Return Date: {returndate}</h1>}

        </div>
    );
};

export default Displayflights;
