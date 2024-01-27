import { useState, useEffect } from 'react';

export default function QuestionTimer({ timeout, onTimeout, mode }) {
    const [remainingTime, setRemainingTime] = useState(timeout);

    useEffect(() => {
        const timer = setTimeout(onTimeout, timeout);

        return () => {
            clearTimeout(timer);
        };
    }, [timeout, onTimeout]);

    useEffect(() => {
        const interval = setInterval(() => {
            setRemainingTime((prevRemainingTime) => prevRemainingTime - 100);
        }, 100);

        return () => {
            clearInterval(interval);
        };
    }, []);
    // To show seconds of the timer left
    // let displaySec;
    // if (quizTimer.toString().length === 5) {
    //     displaySec = <h2>{quizTimer.toString().charAt(0)}{quizTimer.toString().charAt(1)}.{quizTimer.toString().charAt(2)} seconds left</h2>
    // } else if (quizTimer.toString().length === 4) {
    //     displaySec = <h2>{quizTimer.toString().charAt(0)}.{quizTimer.toString().charAt(1)} seconds left</h2>
    // } else if (quizTimer.toString().length === 3) {
    //     displaySec = <h2>0.{quizTimer.toString().charAt(0)} seconds left</h2>
    // } else {
    //     displaySec = <h2>0 seconds left</h2>
    // }

    return (
        <progress
            id="question-time"
            max={timeout}
            value={remainingTime}
            className={mode}
        />
    )
}