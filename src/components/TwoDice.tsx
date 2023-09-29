import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): JSX.Element {
    const [leftDie, setLeftDie] = useState(d6());
    const [rightDie, setRightDie] = useState(d6());

    const rollLeft = () => {
        const newLeftDie = d6();
        if (newLeftDie !== rightDie) {
            setLeftDie(newLeftDie);
        }
    };

    const rollRight = () => {
        const newRightDie = d6();
        if (newRightDie !== leftDie) {
            setRightDie(newRightDie);
        }
    };

    const isLose = leftDie === 1 && rightDie === 1;
    const isWin = leftDie === rightDie && !isLose;

    return (
        <div>
            <span data-testid="left-die">Left Die: {leftDie}</span>
            <span data-testid="right-die">Right Die: {rightDie}</span>

            <Button onClick={rollLeft}>Roll Left</Button>
            <Button onClick={rollRight}>Roll Right</Button>

            {isLose && <p>You Lose!</p>}
            {isWin && <p>You Win!</p>}
        </div>
    );
}
