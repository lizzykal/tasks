import React, { useState } from "react";

export function ChangeColor(): JSX.Element {
    const [selectedColor, setSelectedColor] = useState("");
    const colors = [
        "red",
        "blue",
        "green",
        "yellow",
        "purple",
        "orange",
        "pink",
        "brown"
    ];
    const handleColorChange = (event: {
        target: { value: React.SetStateAction<string> };
    }) => {
        setSelectedColor(event.target.value);
    };

    return (
        <div>
            <h1>Change Color</h1>
            <div>
                {colors.map((color, index) => (
                    <label key={index}>
                        <input
                            type="radio"
                            value={color}
                            checked={selectedColor === color}
                            onChange={handleColorChange}
                            style={{ display: "inline" }}
                        />
                        {color}
                    </label>
                ))}
            </div>
            <div
                data-testid="colored-box"
                style={{
                    backgroundColor: selectedColor,
                    color: "white",
                    padding: "10px",
                    marginTop: "10px"
                }}
            >
                {selectedColor || "Select a color"}
            </div>
        </div>
    );
}
