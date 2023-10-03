import React, { useState } from "react";
import { Button } from "react-bootstrap";

function ShoveBoxButton({
    position,
    setPosition
}: {
    position: number;
    setPosition: (newPosition: number) => void;
}) {
    const handleShoveClick = () => {
        setPosition(position + 4);
    };

    return <Button onClick={handleShoveClick}>Shove the Box</Button>;
}

function MoveableBox({ position }: { position: number }) {
    return (
        <div
            data-testid="moveable-box"
            style={{
                width: "50px",
                height: "50px",
                backgroundColor: "lightblue",
                border: "1px solid blue",
                display: "inline-block",
                verticalAlign: "bottom",
                marginLeft: position + "px"
            }}
        ></div>
    );
}

export function ShoveBox(): JSX.Element {
    // Initialize the position state
    const [position, setPosition] = useState<number>(10);

    return (
        <div>
            <h3>Shove Box</h3>
            {}
            <MoveableBox position={position} />
            <ShoveBoxButton position={position} setPosition={setPosition} />
        </div>
    );
}
