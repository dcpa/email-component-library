import React,{ Component } from "react"; 
import { Container, Row, Col } from 'reactstrap';
import KittyKatty from "../Svg/Svg";
import SearchForm from "../SearchForm/SearchForm";

export default class ViewBox extends Component { 


    render(){
        return(
            <Container fluid>
                <Row>
                <Col xs="2" md="2" className="text-center">
                    <Container>
                        <Row>
                            <Col xs="12">
                                <KittyKatty />
                                <SearchForm />
                            </Col>
                        </Row>
                    </Container>
                    Main 
                    <br />
                    Menu 
                    <br />
                    Where
                    <br />
                    Components
                    <br />
                    Will
                    <br /> Be
                    <br />
                    linked
                </Col>
                </Row>
            </Container>
        )
    }
}