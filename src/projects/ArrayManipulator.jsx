import React, { useState } from 'react';

function ArrayManipulator() {
    const [input, setInput] = useState('');
    const [array, setArray] = useState([]);

    const handleInputChange = (e) => {
        setInput(e.target.value);
    };

    const handleSubmit = () => {
        // Convert the input string to an array of numbers
        setArray(input.split(',').map(num => parseInt(num, 10)));
    };

    const seeingDouble = (array) => {
        return array.map(n => n * 2);
    };

    const threeOfEachThree = (array) => {
        let newArray = [...array];
        for (let i = 0; i < newArray.length; i++) {
            if (newArray[i] === 3) {
                newArray.splice(i + 1, 0, 3, 3);
                i += 2;
            }
        }
        return newArray;
    };

    const middleTwo = (array) => {
        return array.slice((array.length / 2) - 1, (array.length / 2) + 1);
    };

    const sandwichTrick = (array) => {
        let newArray = [...array];
        newArray.splice(newArray.length / 2 - 1, 0, newArray.pop(), newArray.shift());
        return newArray;
    };

    const twoIsSpecial = (array) => {
        return array.filter(n => n === 2);
    };

    const perfectlyOrdered = (array) => {
        return [...array].sort((a, b) => a - b);
    };

    const reorder = (array) => {
        return [...array].reverse();
    };

    const applyTransformation = (transformation) => {
        const result = transformation(array);
        setArray(result);
    };

    return (
        <div>
            <input type="text" value={input} onChange={handleInputChange} placeholder="Enter numbers separated by commas" style={{width: '225px'}}/>
            <button onClick={handleSubmit}>Set Array</button>
            <div>
                <button onClick={() => applyTransformation(seeingDouble)}>Double Each</button>
                <button onClick={() => applyTransformation(threeOfEachThree)}>Triple Threes</button>
                <button onClick={() => applyTransformation(middleTwo)}>Middle Two</button>
                <button onClick={() => applyTransformation(sandwichTrick)}>Sandwich Trick</button>
                <button onClick={() => applyTransformation(twoIsSpecial)}>Filter Twos</button>
                <button onClick={() => applyTransformation(perfectlyOrdered)}>Sort Array</button>
                <button onClick={() => applyTransformation(reorder)}>Reverse Order</button>
            </div>
            <div>
                <h3>Current Array:</h3>
                <p>[{array.join(', ')}]</p>
            </div>
        </div>
    );
}

export default ArrayManipulator;
