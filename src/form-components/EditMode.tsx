import React, { useState } from "react";

export function EditMode(): JSX.Element {
    const [editMode, setEditMode] = useState(false);
    const [userName, setUserName] = useState("Your Name");
    const [isStudent, setIsStudent] = useState(true);

    const handleEditModeToggle = () => {
        setEditMode(!editMode);
    };
    const handleUserNameChange = (event: {
        target: { value: React.SetStateAction<string> };
    }) => {
        setUserName(event.target.value);
    };

    const handleStudentCheckboxChange = () => {
        setIsStudent(!isStudent);
    };
    return (
        <div>
            <h1>Edit Mode</h1>
            <div>
                <label>Edit Mode</label>
                <label className="switch">
                    <input
                        type="checkbox"
                        checked={editMode}
                        onChange={handleEditModeToggle}
                    />
                    <span className="slider"></span>
                </label>
            </div>
            {editMode ? (
                <div>
                    <label>Your Name:</label>
                    <input
                        type="text"
                        value={userName}
                        onChange={handleUserNameChange}
                    />
                    <label>
                        <input
                            type="checkbox"
                            checked={isStudent}
                            onChange={handleStudentCheckboxChange}
                        />
                        Student
                    </label>
                </div>
            ) : (
                <div>
                    <p>
                        {userName} is{" "}
                        {isStudent ? "a student" : "not a student"}
                    </p>
                </div>
            )}
        </div>
    );
}
