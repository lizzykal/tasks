import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [attempts, setAttempts] = useState(4);
    const [quizInProgress, setQuizInProgress] = useState(false);

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
            <h1>Quiz Application</h1>
            <p>Attempts left: {attempts}</p>
            {quizInProgress ? (
                <Button onClick={stopQuiz} disabled={!quizInProgress}>
                    Stop Quiz
                </Button>
            ) : (
                <Button onClick={startQuiz} disabled={attempts === 0}>
                    Start Quiz
                </Button>
            )}
            <Button onClick={useMulligan} disabled={quizInProgress}>
                Mulligan
            </Button>
        </div>
    );
}
