import React from 'react';
import CountdownTimer from './CountdownTimer'; // Adjust the import path as necessary

function Deals() {
    // Set the initial countdown time to 48 hours (in seconds)
    const initialCount = 48 * 3600; // 48 hours in seconds

    return (
        <div className='deals-container'>
            <div className='savings'>
                <div className='combine'>
                    <h1 className='change-free'>FREE</h1>
                    <h1 className='other-deal'>2nd Guest</h1>
                </div>
                <div className='countdown'>
                    <CountdownTimer initialCount={initialCount} />
                </div>
            </div>
        </div>
    );
}

export default Deals;
