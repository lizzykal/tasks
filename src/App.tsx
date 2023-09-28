import React from "react";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";
import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
import { StartAttempt } from "./components/StartAttempt";
import { TwoDice } from "./components/TwoDice";
import { CycleHoliday } from "./components/CycleHoliday";
import { Counter } from "./components/Counter";

function App(): JSX.Element {
    return (
        <div className="App">
            <h1> Lizzy Kalfas </h1>
            <header className="App-header">UD CISC275</header>
            <ol>
                <li>Dog</li>
                <li>Cat</li>
                <li>Hamster</li>
            </ol>
            ;
            <img
                src="https://cdn.psychologytoday.com/sites/default/files/styles/article-inline-half-caption/public/field_blog_entry_images/2021-09/puppy-socialization-pexels-helena-lopes-1790444.jpg?itok=wqs5TWkk"
                alt="A picture of a cute dog"
            />
            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>
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
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <hr></hr>
            <Counter></Counter>
            <hr />
            <RevealAnswer></RevealAnswer>
            <hr />
            <StartAttempt></StartAttempt>
            <hr />
            <TwoDice></TwoDice>
            <hr />
            <ChangeType></ChangeType>
            <hr />
            <CycleHoliday></CycleHoliday>
        </div>
    );
}

export default App;
