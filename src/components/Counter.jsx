import React, { useEffect, useState, useRef } from 'react';
import { MDBBtn } from 'mdb-react-ui-kit';
import './counter.css';

function Counter() {
    const [counter, setCounter] = useState(0);
    const intervalId = useRef(null);

    const startCounter = () => {
        if (!intervalId.current) {
            intervalId.current = setInterval(() => {
                setCounter(prevCounter => prevCounter + 1);
            }, 1000); // Adjust the interval time as needed
        }
    }

    const stopCounter = () => {
        if (intervalId.current) {
            clearInterval(intervalId.current);
            intervalId.current = null; // Reset the reference
        }
    }

    const resetCounter = () => {
        stopCounter(); // Stop the counter first
        setCounter(0); // Reset the counter to 0
        startCounter(); // Start the counter again
    }

    useEffect(() => {
        startCounter(); 
        return () => stopCounter(); // Cleanup on component unmount
    }, []);

    return (
        <div className="main">
            <div className="counter">
                <h1>{counter}</h1>
                <div className="btns">
                    <MDBBtn className='me-1' color='success' onClick={stopCounter}>
                        Stop
                    </MDBBtn>
                    <MDBBtn className='me-1' color='danger' onClick={resetCounter}>
                        Reset
                    </MDBBtn>
                </div>
            </div>
        </div>
    )
}

export default Counter;
