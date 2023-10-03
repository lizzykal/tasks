import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function DoubleHalf(): JSX.Element {
    const [dhValue, setDhValue] = useState<number>(10);
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
            <Button onClick={handleDoubleClick}>Double</Button>
            <Button onClick={handleHalfClick}>Half</Button>
        </div>
    );
}
