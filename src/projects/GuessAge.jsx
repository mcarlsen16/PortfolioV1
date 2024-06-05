import React, { useState } from 'react';

const AgeGuesser = ({ earthAge = 21 }) => {
    const [currentGuess, setCurrentGuess] = useState('');
    const [lastGuess, setLastGuess] = useState(null);
    const [feedback, setFeedback] = useState('Try to guess my age!');
    const [selectedPlanet, setSelectedPlanet] = useState('earth');

    const planets = {
        mercury: 0.2408467,
        venus: 0.61519726,
        earth: 1.0,
        mars: 1.8808158,
        jupiter: 11.862615,
        saturn: 29.447498,
        uranus: 84.016846,
        neptune: 164.79132
    };

    const getPlanetTime = (planet) => {
        return fetch(`https://osbackend.azurewebsites.net/planet/${planet}`)
            .then(response => response.json())
            .then(data => {
                if (data && data.payload) {
                    return data.payload.orbitalTime;
                }
                throw new Error('No orbital time found');
            })
            .catch(error => {
                console.error('Error fetching planet:', error);
                throw error; // Re-throw to handle it in the calling function
            });
    }

    const calculateAgeOnPlanet = async (planet) => {
        try {
            let time = await getPlanetTime(planet);
            return 21 / time;
        } catch (error) {
            console.error('Failed to calculate age on planet:', error);
            return Infinity; // or some error handling
        }
    };


    // const myAge = Math.round(calculateAgeOnPlanet(21, selectedPlanet));

    // const getMyAge = () => {calculateAgeOnPlanet(21,selectedPlanet)};

    const handleGuess = async (e) => {
        e.preventDefault();
        // const guess = parseInt(currentGuess, 10);
        const guess = parseFloat(currentGuess);


        if (isNaN(guess)) {
            setFeedback("Please enter a valid number.");
            return;
        }
    
        try {
            let ageNoRound = await calculateAgeOnPlanet(selectedPlanet);
            let myAge = Math.round(ageNoRound);

            if (myAge === 0) {
                myAge = Number(ageNoRound.toFixed(2));
            }
    
            if (guess === myAge) {
                setFeedback("Congratulations! You guessed correctly!");
            } else if (lastGuess !== null) {
                const previousDistance = Math.abs(lastGuess - myAge);
                const currentDistance = Math.abs(guess - myAge);
    
                if (currentDistance < previousDistance) {
                    setFeedback("Getting closer!");
                } else if (currentDistance > previousDistance) {
                    setFeedback("Getting further away...");
                } else {
                    setFeedback("Same distance. Try again!");
                }
            } else {
                setFeedback("Looks like the first time isn't the charm, try again!");
            }
        } catch (error) {
            setFeedback("Error calculating age.");
        }
    
        setLastGuess(guess);
        setCurrentGuess('');
    };

    const handlePlanetChange = (e) => {
        setSelectedPlanet(e.target.value);
    };

    return (
        <div>
            <h1>Guess My Age!</h1>
            <form onSubmit={handleGuess} style={{ backgroundColor: 'transparent' }}>
                <input
                    type="text"
                    value={currentGuess}
                    onChange={e => setCurrentGuess(e.target.value)}
                    placeholder="Enter a number..."
                />
                <select value={selectedPlanet} onChange={handlePlanetChange}>
                    {Object.keys(planets).map(planet => (
                        <option key={planet} value={planet}>{planet.charAt(0).toUpperCase() + planet.slice(1)}</option>
                    ))}
                </select>
                <button type="submit">Guess</button>
            </form>
            <p>{feedback}</p>
        </div>
    );
};

export default AgeGuesser;
