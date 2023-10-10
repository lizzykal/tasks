import React, { useState } from "react";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer
}: {
    options: string[];
    expectedAnswer: string;
}): JSX.Element {
    const [selectedChoice, setSelectedChoice] = useState(options[0]);

    const handleChoiceSelect = (event: {
        target: { value: React.SetStateAction<string> };
    }) => {
        setSelectedChoice(event.target.value);
    };
    return (
        <div>
            <h1>Multiple Choice Question</h1>
            <label>Select your answer:</label>
            <select value={selectedChoice} onChange={handleChoiceSelect}>
                {options.map((option, index) => (
                    <option key={index} value={option}>
                        {option}
                    </option>
                ))}
            </select>
            {selectedChoice === expectedAnswer ? (
                <span>✔️</span>
            ) : (
                <span>❌</span>
            )}
        </div>
    );
}
