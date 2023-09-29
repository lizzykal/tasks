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

    // Function to roll the left die
    const rollLeft = () => {
        setLeftDie(d6());
    };

    // Function to roll the right die
    const rollRight = () => {
        setRightDie(d6());
    };
    let gameOutcome = "";
    if (leftDie === rightDie) {
        gameOutcome = "Lose";
    } else if (leftDie !== 1 && rightDie !== 1) {
        gameOutcome = "Win";
    }

    return (
        <div>
            <h1>Two Dice Game</h1>
            <div>
                <span data-testid="left-die">{leftDie}</span>
                <span data-testid="right-die">{rightDie}</span>
            </div>
            <Button onClick={rollLeft}>Roll Left</Button>
            <Button onClick={rollRight}>Roll Right</Button>
            {gameOutcome && <p>You {gameOutcome}!</p>}
        </div>
    );
}
