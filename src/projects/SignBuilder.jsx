import React, { useState } from 'react';

function SignBuilder() {
    const [signType, setSignType] = useState('');
    const [occasion, setOccasion] = useState('');
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [year, setYear] = useState('');
    const [currency, setCurrency] = useState('USD');
    const [finalSign, setFinalSign] = useState('');
    const [finalCost, setFinalCost] = useState('');
    const [showFinalSign, setShowFinalSign] = useState(false);

    const buildSign = (occasion, name) => {
        return `Happy ${occasion} ${name}!`;
    };

    const buildBirthdaySign = (age) => {
        return `Happy Birthday! What a ${age >= 50 ? "mature" : "young"} fellow you are.`;
    };

    const graduationFor = (name, year) => {
        return `Congratulations ${name}!\nClass of ${year}`;
    };

    const costOf = (sign) => {
        return `Your sign costs ${(sign.split('').length * 2 + 20).toFixed(2)} ${currency}.`;
    };

    const handleConfirm = () => {
        let sign = '';
        switch (signType) {
            case 'birthday':
                sign = buildBirthdaySign(age);
                break;
            case 'occasion':
                sign = buildSign(occasion, name);
                break;
            case 'graduation':
                sign = graduationFor(name, year);
                break;
            default:
                break;
        }
        setFinalSign(sign);
        setFinalCost(costOf(sign));
        setShowFinalSign(true);
    };

    return (
        <div>
            <select value={signType} onChange={e => { setSignType(e.target.value); setShowFinalSign(false); }}>
                <option value="">Select a sign type</option>
                <option value="occasion">Occasion</option>
                <option value="birthday">Birthday</option>
                <option value="graduation">Graduation</option>
            </select>
            {signType === 'occasion' && (
                <>
                    <input type="text" placeholder="Occasion" value={occasion} onChange={e => setOccasion(e.target.value)} />
                    <input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
                </>
            )}
            {signType === 'birthday' && (
                <input type="number" placeholder="Age" value={age} onChange={e => setAge(e.target.value)} />
            )}
            {signType === 'graduation' && (
                <>
                    <input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
                    <input type="number" placeholder="Graduation Year" value={year} onChange={e => setYear(e.target.value)} />
                </>
            )}
            <input type="text" placeholder="Currency" value={currency} onChange={e => setCurrency(e.target.value.toUpperCase())} />
            <button onClick={handleConfirm}>Confirm</button>
            {showFinalSign && (
                <>
                    <p>{finalSign}</p>
                    <p>{finalCost}</p>
                </>
            )}
        </div>
    );
}

export default SignBuilder;
