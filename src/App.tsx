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
            <Button>Log Hello World</Button>
            <Button onClick={() => console.log("Hello world!")}>
                Click Me
            </Button>
            <header className="App-header">UD CISC275 by Lizzy Kalfas</header>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
            <p>
                This is just a paragraph of text. It can go onto multiple lines,
                if you want.
            </p>
            ;
            <Container>
                <Row>
                    <Col>
                        First column.
                        <div>
                            width: 500px; height: 200px; background-color:
                            #f32121;
                        </div>
                    </Col>
                    <Col>
                        Second column. You can put whatever you want in here,
                        and it will be on the right side. Maybe try adding an
                        image?
                        <div>
                            width: 500px; height: 200px; background-color:
                            #f32121;
                        </div>
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
