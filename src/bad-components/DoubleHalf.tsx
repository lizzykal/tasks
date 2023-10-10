import React, { useState } from "react";
import { Button } from "react-bootstrap";

import { dhValue, setDhValue } from "./DoubleHalfState";

function Doubler(): JSX.Element {
    return <Button onClick={() => setDhValue(2 * dhValue)}>Double</Button>;
}

function Halver(): JSX.Element {
    return <Button onClick={() => setDhValue(0.5 * dhValue)}>Halve</Button>;
}

export function DoubleHalf(): JSX.Element {


export const [dhValue, setDhValue] = useState<number>(10);

export function DoubleHalf(): JSX.Element {
    const handleDoubleClick = () => {
        setDhValue(dhValue * 2);
    };

    const handleHalfClick = () => {
        setDhValue(dhValue / 2);
    };

    return (
        <div>
            <h3>Double Half</h3>
            <div>
                The current value is: <span>{dhValue}</span>
            </div>

            <Doubler></Doubler>
            <Halver></Halver>

            <Button onClick={handleDoubleClick}>Double</Button>
            <Button onClick={handleHalfClick}>Half</Button>

        </div>
    );
}
