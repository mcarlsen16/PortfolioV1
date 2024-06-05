import React, { useState } from 'react';

const PangramChecker = () => {
    const [phrase, setPhrase] = useState('');
    const [isPangram, setIsPangram] = useState(null);

    const handleChange = (event) => {
        setPhrase(event.target.value);
    };

    const checkPangram = (input) => {
        const alphabet = 'abcdefghijklmnopqrstuvwxyz';
        const inputLowercase = input.toLowerCase();
        for (let char of alphabet) {
            if (!inputLowercase.includes(char)) {
                return false;
            }
        }
        return true;
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const result = checkPangram(phrase);
        setIsPangram(result);
    };

    return (
        <div>
            <h1>Pangram Checker</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={phrase}
                    onChange={handleChange}
                    placeholder="Type your phrase here..."
                />
                <button type="submit">Check</button>
            </form>
            {isPangram !== null && (
                <p>Your phrase is {isPangram ? "a pangram" : "not a pangram"}.</p>
            )}
        </div>
    );
};

export default PangramChecker;
