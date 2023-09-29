import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [attempts, setAttempts] = useState(4); // Initial number of attempts
    const [quizInProgress, setQuizInProgress] = useState(false); // Initially not in progress

    const startQuiz = () => {
        if (attempts > 0) {
            setQuizInProgress(true);
            setAttempts(attempts - 1);
        }
    };
    const stopQuiz = () => {
        setQuizInProgress(false);
    };
    const useMulligan = () => {
        setAttempts(attempts + 1);
    };
    return (
        <div>
            <p>Number of attempts: {attempts}</p>
            <p>Quiz in progress: {quizInProgress ? "Yes" : "No"}</p>

            <Button
                onClick={startQuiz}
                disabled={quizInProgress || attempts === 0}
            >
                Start Quiz
            </Button>

            <Button onClick={stopQuiz} disabled={!quizInProgress}>
                Stop Quiz
            </Button>

            <Button onClick={useMulligan} disabled={quizInProgress}>
                Mulligan
            </Button>
        </div>
    );
}
