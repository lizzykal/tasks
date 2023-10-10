import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [attemptsLeft, setAttemptsLeft] = useState(3);
    const [requestedAttempts, setRequestedAttempts] = useState("");

    const handleUseAttempt = () => {
        if (attemptsLeft > 0) {
            setAttemptsLeft(attemptsLeft - 1);
        }
    };

    const handleGainAttempts = () => {
        const parsedAttempts = parseInt(requestedAttempts, 10);

        if (!isNaN(parsedAttempts) && parsedAttempts >= 0) {
            setAttemptsLeft(attemptsLeft + parsedAttempts);
            setRequestedAttempts("");
        }
    };
    return (
        <div>
            <h1>Give Attempts</h1>
            <p>Attempts Left: {attemptsLeft}</p>
            <div>
                <label>Requested Attempts:</label>
                <input
                    type="number"
                    value={requestedAttempts}
                    onChange={(e) => setRequestedAttempts(e.target.value)}
                />
                <Button
                    onClick={handleUseAttempt}
                    disabled={attemptsLeft === 0}
                >
                    Use
                </Button>
                <Button onClick={handleGainAttempts}>Gain</Button>
            </div>
        </div>
    );
}
