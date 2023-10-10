import React, { useState } from "react";

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [userAnswer, setUserAnswer] = useState("");
    const handleInputChange = (event: {
        target: { value: React.SetStateAction<string> };
    }) => {
        setUserAnswer(event.target.value);
    };

    return (
        <div>
            <label>Enter your answer: </label>
            <input
                type="text"
                value={userAnswer}
                onChange={handleInputChange}
            />
            {userAnswer === expectedAnswer ? <span>✔️</span> : <span>❌</span>}
        </div>
    );
}
