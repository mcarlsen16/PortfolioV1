import React, { useState } from 'react';

const GigasecondCalculator = () => {
    const [birthdate, setBirthdate] = useState('');
    const [birthtime, setBirthtime] = useState('');
    const [ageInGigaseconds, setAgeInGigaseconds] = useState(null);

    const handleDateChange = (event) => {
        setBirthdate(event.target.value);
    };

    const handleTimeChange = (event) => {
        setBirthtime(event.target.value);
    };

    const calculateGigaseconds = (date, time) => {
        const fullBirthdate = new Date(`${date}T${time}`);
        const currentDate = new Date();
        const secondsBetween = (currentDate.getTime() - fullBirthdate.getTime()) / 1000;
        return secondsBetween / 1e9;
    };

    const handleSubmit = () => {
        const ageGigaseconds = calculateGigaseconds(birthdate, birthtime);
        setAgeInGigaseconds(ageGigaseconds);
    };

    return (
        <div>
            <h1>Calculate Your Age in Gigaseconds</h1>
            <div>
                <input
                    type="date"
                    value={birthdate}
                    onChange={handleDateChange}
                />
                <input
                    type="time"
                    value={birthtime}
                    onChange={handleTimeChange}
                />
            </div>
            <button onClick={handleSubmit}>
                Submit
            </button>
            {ageInGigaseconds !== null && (
                <p>You are {ageInGigaseconds.toFixed(9)} gigaseconds old!</p>
            )}
        </div>
    );
};

export default GigasecondCalculator;
