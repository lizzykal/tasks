import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): JSX.Element {
    const [isAnswerVisible, setIsAnswerVisible] = useState(false);

    // Function to toggle the visibility of the answer text
    const toggleAnswerVisibility = () => {
        setIsAnswerVisible(!isAnswerVisible);
    };

    return (
        <div>
            <h1>Quiz Application</h1>
            <Button onClick={toggleAnswerVisibility}>Reveal Answer</Button>
            {isAnswerVisible && <p>The answer is 42</p>}
        </div>
    );
    return <div>Reveal Answer</div>;
}
