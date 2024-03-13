import React, { useState, useEffect } from 'react';

const CountdownTimer = ({ initialCount }) => {
    const [count, setCount] = useState(initialCount);

    useEffect(() => {
        // If count is 0, reset it to the initial count
        if (count === 0) {
            setCount(initialCount);
        }

        // Set up the interval
        const intervalId = setInterval(() => {
            setCount(currentCount => currentCount > 0 ? currentCount - 1 : 0);
        }, 1000);

        // Clear the interval on component unmount
        return () => clearInterval(intervalId);
    }, [count, initialCount]);

    // Convert the count into hours, minutes, and seconds
    const hours = Math.floor(count / 3600);
    const minutes = Math.floor((count % 3600) / 60);
    const seconds = count % 60;

    // Format time for display
    const formatTime = num => num.toString().padStart(2, '0');

    return (
        <div>{formatTime(hours)}:{formatTime(minutes)}:{formatTime(seconds)}
        </div>
    );
};

export default CountdownTimer;
