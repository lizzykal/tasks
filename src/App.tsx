import React from "react";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";

function App(): JSX.Element {
    return (
        <div className="App">
            <h1>Hello World</h1>; This is{" "}
            <span style={{ color: "red" }}>colored text</span>.
            <img
                src="C:\Users\Lizzy Kalfas\Downloads\Dogimagefortaks3.jpg"
                alt="A picture of a cute dog"
            />
            <Button onClick={() => console.log("Hello world!")}>
                Log Hello World
            </Button>
            <header className="App-header">UD CISC275 by Lizzy Kalfas</header>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
            ;
            <Container>
                <Row>
                    <Col>
                        First column
                        <p>&nbsp;</p>
                        <svg width="100" height="50">
                            <rect width="100" height="50" fill="red" />
                        </svg>
                    </Col>
                    <Col>
                        Second column.
                        <p>&nbsp;</p>
                        <svg width="100" height="50">
                            <rect width="100" height="50" fill="red" />
                        </svg>
                    </Col>
                </Row>
            </Container>
            <ol>
                <li>Dog</li>
                <li>Cat</li>
                <li>Hamster</li>
            </ol>
        </div>
    );
}

export default App;
