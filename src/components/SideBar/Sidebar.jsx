import React from "react";
import { Accordion, Card } from "react-bootstrap";

const SideBar = (props) => {
    return (
        <>
            <Accordion>
                <Card bg="dark" text="white">
                    <Card.Header>
                        <Accordion.Toggle as={Card.Header} eventKey="0">
                            {props.title}
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>
                            {props.children}
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        </>
    )
}

export default SideBar;